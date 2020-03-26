const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development); //Arquivo JSOB KNEXFILE ambiente de desenvolvimento.
module.exports = connection;
