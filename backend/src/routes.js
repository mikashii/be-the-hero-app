const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');
const OngController = require('./Controllers/OngController');
const IncidentsController = require('./Controllers/IncidentsController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

//Requerir campos da tabela ONGS
routes.get('/ongs', OngController.index);
routes.post('/sessions', SessionController.create);

//Create incident case
routes.post('/incidents', IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

//Criação de ONG
routes.post('/ongs', OngController.create);

module.exports = routes;
