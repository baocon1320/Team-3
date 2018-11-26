//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let addressController = require('../controllers/address');


const addressRoutes = express.Router();
//Account Routes
//addressRoutes.get('/name=:name', addressController.getaddressByName);
addressRoutes.get('/id=:id', addressController.getAddressById);
addressRoutes.post('/',  addressController.createAddress);
addressRoutes.put('/update/:id', addressController.updateAddress);

module.exports = addressRoutes;
