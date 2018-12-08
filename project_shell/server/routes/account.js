//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let AccountController = require('../controllers/account');


const accountRoutes = express.Router();
//Account Routes
accountRoutes.get('/username=:username', AccountController.getAccountByUser);
accountRoutes.get('/id=:id', AccountController.getAccountById);
accountRoutes.get('/admin', AccountController.getAccountByAdmin);
accountRoutes.post('/',  AccountController.createAccount);
accountRoutes.get('/all', AccountController.getAllAccounts);
accountRoutes.delete('/delete/id=:id', AccountController.deleteAccount);
accountRoutes.post('/login', AccountController.loginAccount);
accountRoutes.put('/update/id=:id', AccountController.updateAccount);
module.exports = accountRoutes;
