//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let AccountController = require('../controllers/account');


const accountRoutes = express.Router();
//Account Routes
accountRoutes.get('/username=:username', AccountController.getAccountByUser);
accountRoutes.get('/id=:id', AccountController.getAccountById);
accountRoutes.post('/',  AccountController.createAccount);
accountRoutes.get('/all', AccountController.getAllAccounts);


module.exports = accountRoutes;