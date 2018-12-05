//This file is run whenever express encounters a http request that starts with '/itemorderfks'.
var express = require('express');
let ItemOrderFKsController = require('../controllers/itemorderfks');


const itemOrderFKsRoutes = express.Router();
//itemOrderFKsRoutes Routes
itemOrderFKsRoutes.get('/single/:id', ItemOrderFKsController.getItemOrderById);
itemOrderFKsRoutes.get('/all', ItemOrderFKsController.getAllItemOrders);
itemOrderFKsRoutes.get('/order/:id', ItemOrderFKsController.getItemOrderByOrderId);
itemOrderFKsRoutes.get('/itemOrder/:itemId/:orderId', ItemOrderFKsController.getItemOrderByIOIds);
itemOrderFKsRoutes.get('/item/:id', ItemOrderFKsController.getItemOrderByItemId)
itemOrderFKsRoutes.put('/update/:id', ItemOrderFKsController.updateItemOrder);
itemOrderFKsRoutes.post('/', ItemOrderFKsController.createItemOrder);
itemOrderFKsRoutes.delete('/item/:id', ItemOrderFKsController.deleteByItemId);
itemOrderFKsRoutes.delete('/:id', ItemOrderFKsController.deleteById);

module.exports = itemOrderFKsRoutes;