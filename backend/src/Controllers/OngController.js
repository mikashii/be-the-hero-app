const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*'); //select * da tabela ongs

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    //Criando ID único para cada ONG
    /**Criar ID Random com 4 bytes, convertendo para string no formato HEXADECIMAL
     *  - Faz parte do node -
     */
    const id = crypto.randomBytes(4).toString('HEX');

    /* Aguarda o bloco de código executar, para então continuar o restante */
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
