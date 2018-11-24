//This file is run whenever express encounters a http request that starts with '/account'.
var express = require('express');
let CategoryController = require('../controllers/category');


const categoryRoutes = express.Router();
//Account Routes
//categoryRoutes.get('/name=:name', CategoryController.getCategoryByName);
categoryRoutes.get('/id=:id', CategoryController.getCategoryById);
categoryRoutes.post('/',  CategoryController.createCategory);
categoryRoutes.get('/all', CategoryController.getAllCategories);
categoryRoutes.put('/update/:id', CategoryController.updateCategory);
categoryRoutes.delete('/delete/:id', CategoryController.deleteCategoryById);

module.exports = categoryRoutes;