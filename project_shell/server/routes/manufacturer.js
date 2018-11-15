//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let ManufacturerController = require('../controllers/manufacturer');


const manufacturerRoutes = express.Router();
manufacturerRoutes.get('/id=:id', ManufacturerController.getManufacturerById);
manufacturerRoutes.post('/',  ManufacturerController.createManufacturer);
manufacturerRoutes.get('/all', ManufacturerController.getAllManufacturers);
manufacturerRoutes.put('/update/:id', ManufacturerController.updateManufacturer);

module.exports = manufacturerRoutes;