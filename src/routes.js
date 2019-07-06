const express = require('express');

const routes = express.Router();
const UserControllers = require('./app/controller/UserControllers');

routes.get('/users', UserControllers.list);
routes.get('/users/:id', UserControllers.achaum);
routes.post('/users/', UserControllers.create);

module.exports = routes;
