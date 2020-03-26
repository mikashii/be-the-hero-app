exports.up = function(knex) {
  //Método UP é responsável por criar a tabela
  return knex.schema.createTable('incidents', function(table) {
    table.increments(); //cria uma chave que se auto incrementa

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();
    table
      .foreign('ong_id') //Coluna
      .references('id') //Que referencia o ID da tabela ONGS
      .inTable('ongs'); //Tabela de ONGS
  });
};

exports.down = function(knex) {
  //Se precisar voltar, delete
  return knex.schema.dropTable('incidents');
};
