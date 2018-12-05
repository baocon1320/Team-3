//This file is run whenever express encounters a http request that starts with '/item'.
var express = require('express');
let ItemController = require('../controllers/item');

const itemRoutes = express.Router();

itemRoutes.get('/id=:id', ItemController.getItemById); // Fixed id=:id so it not violate with all
itemRoutes.get('/all', ItemController.getAllItems);
itemRoutes.get('/pageItems/:pageNum', ItemController.getPageItems);
itemRoutes.get('/category=:category_id', ItemController.getItemsByCategory);
itemRoutes.post('/', ItemController.createItem);
itemRoutes.put('/update/id=:id', ItemController.updateItem);
itemRoutes.get('/countall', ItemController.getNumberofItem);
itemRoutes.delete('/delete/id=:id', ItemController.deleteItem);
itemRoutes.get('/price', ItemController.getItemsByPrice);
itemRoutes.get('/order/:id', ItemController.getItemsByOrderId);
itemRoutes.get('/listItems/:id', ItemController.getListItemsByListofId)

//itemRoutes.put('/update/:id', ItemController.updateItem);





module.exports = itemRoutes;