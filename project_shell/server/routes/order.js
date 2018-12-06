//This file is run when express encountes an http request starting with '/order'.
var express = require('express');
let OrderController = require('../controllers/order');


const orderRoutes = express.Router();

//Order Routes
orderRoutes.get('/id=:id', OrderController.getOrderById);
// orderRoutes.get('/account', OrderController.getOrderByAccountId);
orderRoutes.post('/create', OrderController.createOrder);
orderRoutes.put('/addItem', OrderController.addItemToOrder);
orderRoutes.put('/removeItem', OrderController.removeItemFromOrder);
orderRoutes.delete('/deleteOrder/:id', OrderController.deleteOrder);
orderRoutes.get('/all', OrderController.getAllOrders);
orderRoutes.put('/update/:id', OrderController.updateOrder);
orderRoutes.get('/getByEmailAndId/:id/:email', OrderController.getOrderByEmailAndId);

module.exports = orderRoutes;

