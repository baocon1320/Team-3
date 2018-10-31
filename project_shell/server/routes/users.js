var express = require('express');

let AccountController = require('../controllers/account'),
    GeneralController = require('../controllers/general'),
    ItemController = require('../controllers/item'),
    OrderController = require('../controllers/order');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = function(){
	let rootRoutes = express.Router(),
		apiRoutes = express.Router(),
		accountRoutes = express.Router(),
		generalRoutes = express.Router(),
		itemRoutes = express.Router(),
		orderRoutes = express.Router();

	//Account Routes
	apiRoutes.use('/account', accountRoutes);
	accountRoutes.get('/:id', AccountController.getAccountById);
	accountRoutes.post('/create', AccountController.createAccount);

	// General Routes
	apiRoutes.use('/general', generalRoutes);
	generalRoutes.get('/:id', GeneralController.getGeneralById);
	generalRoutes.put('/update', GeneralController.updateGeneral);

	// Item Routes
	apiRoutes.use('/item', itemRoutes);
	itemRoutes.get('/single/:id', ItemController.getItemById);
	itemRoutes.get('/all', ItemController.getAllItems);
	itemRoutes.get('/category', ItemController.getItemsByCategory);
	itemRoutes.get('/price', ItemController.getItemsByPrice);

	// Order Routes
	apiRoutes.use('/order', orderRoutes);
	orderRoutes.get('/:id', OrderController.getOrderById);
	orderRoutes.get('/account', OrderController.getOrderByAccountId);
	orderRoutes.post('/create', OrderController.createOrder);
	orderRoutes.put('/addItem', OrderController.addItemToOrder);
	orderRoutes.put('/removeItem', OrderController.removeItemFromOrder);
	orderRoutes.delete('/deleteOrder', OrderController.deleteOrder);

	// Set up all routes
	rootRoutes.use('/api', apiRoutes);
	return rootRoutes;
};		

