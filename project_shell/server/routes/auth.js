//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let AuthController = require('../controllers/auth');


const authRoutes = express.Router();
//Account Routes
authRoutes.get('/accountId=:id', AuthController.getTokenByAccountId);

module.exports = authRoutes;