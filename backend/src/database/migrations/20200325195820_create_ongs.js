exports.up = function(knex) {
  //Método UP é responsável por criar a tabela
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary(); //primeiro campo vai ser uma string com o nome ID, e será a chave primária.
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); //segundo parâmetro: tamanho do texto que será passado dentro do campo
  });
};

exports.down = function(knex) {
  //Se precisar voltar, delete
  return knex.schema.dropTable('ongs');
};
