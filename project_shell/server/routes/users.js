//This file is run when express encounters a http request starting with '/users'.
var express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
// module.exports = function(){
// 	// let rootRoutes = express.Router(),
// 	// 	apiRoutes = express.Router(),
// 	// 	accountRoutes = express.Router(),
// 	// 	itemRoutes = express.Router(),
// 	// 	orderRoutes = express.Router();

// 	// //Account Routes
// 	// apiRoutes.use('/account', accountRoutes);
// 	// accountRoutes.get('/:id', AccountController.getAccountById);
// 	// accountRoutes.post('/create', AccountController.createAccount);

	
// 	// // Item Routes
// 	// apiRoutes.use('/item', itemRoutes);
// 	// itemRoutes.get('/single/:id', ItemController.getItemById);
// 	// itemRoutes.get('/all', ItemController.getAllItems);
// 	// itemRoutes.get('/category', ItemController.getItemsByCategory);
// 	// itemRoutes.get('/price', ItemController.getItemsByPrice);

// 	// // Order Routes
// 	// apiRoutes.use('/order', orderRoutes);
// 	// orderRoutes.get('/:id', OrderController.getOrderById);
// 	// orderRoutes.get('/account', OrderController.getOrderByAccountId);
// 	// orderRoutes.post('/create', OrderController.createOrder);
// 	// orderRoutes.put('/addItem', OrderController.addItemToOrder);
// 	// orderRoutes.put('/removeItem', OrderController.removeItemFromOrder);
// 	// orderRoutes.delete('/deleteOrder', OrderController.deleteOrder);

// 	// // Set up all routes
// 	// rootRoutes.use('/api', apiRoutes);
// 	// return rootRoutes;
// };		

