//This file is run whenever express encounters a http request that starts with '/item'.
var express = require('express');
let ItemController = require('../controllers/item');

const itemRoutes = express.Router();

itemRoutes.get('/id=:id', ItemController.getItemById); // Fixed id=:id so it not violate with all
itemRoutes.get('/all', ItemController.getAllItems);
itemRoutes.get('/pageItems/:pageNum', ItemController.getPageItems);
itemRoutes.get('/category=:category_id', ItemController.getItemsByCategory);
itemRoutes.get('/price', ItemController.getItemsByPrice);
itemRoutes.post('/', ItemController.createItem);
itemRoutes.put('/update/:id', ItemController.updateItem);
itemRoutes.get('/countall', ItemController.getNumberofItem);


module.exports = itemRoutes;