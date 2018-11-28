//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let UserController = require('../controllers/user');


const userRoutes = express.Router();
//Account Routes
//accountRoutes.get('/username=:username', AccountController.getAccountByUser);
userRoutes.get('/', UserController.getAllUsers);
userRoutes.get('/profile', UserController.getUserProfile);


module.exports = userRoutes;