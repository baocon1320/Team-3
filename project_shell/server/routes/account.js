//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let AccountController = require('../controllers/account');

const accountRoutes = express.Router();
//Account Routes
accountRoutes.get('/:id', AccountController.getAccountById);
accountRoutes.post('/create', AccountController.createAccount);

module.exports = accountRoutes;