const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //arquivo com as rotas
const app = express(); /**Variavel instanciando */

app.use(cors());
app.use(express.json()); //Entende que os dados precisam ser passados via JSON
app.use(routes);

app.listen(3333); /**Porta localhost/3333 */

/**
 * Request guarda todas as informações retornadas da requisição do usuário usuário.
 * Response: é responsável por retornar uma resposta para o usuário.
 */

/**
 * Métodos HTTP:
 * GET: buscar/listar informação do back-end
 * POST: criar uma informação no back end
 * PUT: Alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * Tipos de parâmetro
 * Query: Parâmetros(nomeados) que enviamos na URL após o simbolo de ?, utilizado com filtros, paginação
 * EX: ?page=2&name=Carolina
 * Route Params: Parametros para identificar recursos(rota) - /users/:id
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *   */

/**
 * Bancos de dados
 *
 * SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: Mais famoso é o MongoDB
 *
 * Driver: SELECT * FROM USERS
 * QUERY BUILDER: TABLE('USERS').SELECT(*).WHERE()
 */

// app.post('/users', (request, response) => {
//   const params = request.body;
//   console.log(params);

//   return response.json({
//     evento: 'Semana ominiStack',
//     aluno: 'Jessyka'
//   });
// });

/*O node não fica observando as alterações no arquivo dessa maneira */
