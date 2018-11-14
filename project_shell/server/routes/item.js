//This file is run whenever express encounters a http request that starts with '/item'.
var express = require('express');
let ItemController = require('../controllers/item');

const itemRoutes = express.Router();

// itemRoutes.get('/:id', ItemController.getItemById);
// itemRoutes.get('/all', ItemController.getAllItems);
// itemRoutes.get('/pageItems/:pageNum', ItemController.getPageItems);
// itemRoutes.get('/category', ItemController.getItemsByCategory);
// itemRoutes.get('/price', ItemController.getItemsByPrice);
itemRoutes.post('/', ItemController.createItem);

module.exports = itemRoutes;
