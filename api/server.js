const express = require('express');

const setUpMiddleware = require('./setUpMiddleware.js');
const unitsController = require('../units/controller.js');

const server = express();

//middleware 
setUpMiddleware(server);

//routes
server.use('/api/units', unitsController)

module.exports = server;