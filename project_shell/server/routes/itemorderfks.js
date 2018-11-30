//This file is run whenever express encounters a http request that starts with '/itemorderfks'.
var express = require('express');
let ItemOrderFKsController = require('../controllers/itemorderfks');


const itemOrderFKsRoutes = express.Router();
//itemOrderFKsRoutes Routes
itemOrderFKsRoutes.get('/:id', ItemOrderFKsController.getItemOrderById);
itemOrderFKsRoutes.get('/all', ItemOrderFKsController.getAllItemOrders);
itemOrderFKsRoutes.get('/order/:id', ItemOrderFKsController.getItemOrderByOrderId);
itemOrderFKsRoutes.put('/update/:id', ItemOrderFKsController.updateItemOrder);
itemOrderFKsRoutes.post('/', ItemOrderFKsController.createItemOrder);


module.exports = itemOrderFKsRoutes;