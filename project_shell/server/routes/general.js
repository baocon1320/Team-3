//This file is called run whenever express encounters an http request that begins with  '/general'.
var express = require('express');
GeneralController = require('../controllers/general');

const generalRoutes = express.Router();

generalRoutes.get('/:id', GeneralController.getGeneralById);
generalRoutes.post('/', GeneralController.createGeneral);
generalRoutes.put('/update/:id', GeneralController.updateGeneral);

module.exports = generalRoutes;


// module.exports = function () {
// 	// General Routes
// 	//TODO: Double check connection from app.js to routes files
// 	// generalRoutes.use('/general', generalRoutes);
// 	generalRoutes.get('/:id', GeneralController.getGeneralById);
// 	generalRoutes.put('/update', GeneralController.updateGeneral);

//  }
