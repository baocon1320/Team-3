//This file is run when express encountes an http request starting with '/order'.
var express = require('express');
let OrderController = require('../controllers/order');


const orderRoutes = express.Router();

//Order Routes
orderRoutes.get('/:id', OrderController.getOrderById);
// orderRoutes.get('/account', OrderController.getOrderByAccountId);
orderRoutes.post('/create', OrderController.createOrder);
orderRoutes.put('/addItem', OrderController.addItemToOrder);
orderRoutes.put('/removeItem', OrderController.removeItemFromOrder);
orderRoutes.delete('/deleteOrder/:id', OrderController.deleteOrder);

module.exports = orderRoutes;

