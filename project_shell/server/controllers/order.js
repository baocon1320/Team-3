const { Order } = require('../models');
const { Item } = require('../models');
// const ItemOrder = require('../models/ItemOrder');
const Sequelize = require('sequelize');

//finds a single order via the order id
exports.getOrderById = async(req, res) => {
	Order.findById(req.params.id).then((order) => {
		if(order ==nul){
			return res.json(404);
		}else{
			return res.json(order);
		}
	});
};

//creates a new order given json data from the front
exports.createOrder = async(req, res) => {
	Order.create(req.body).then((order) => {
		if(order == null){
			return res.json(404);
		}else{
			return res.json(order);
		}
	});
};

exports.addItemToOrder = async(req, res) => {
	Order.findById(req.body.orderId).then((order) => {
		if(order == null){
			res.json(404);
		}else{
			Item.findById(req.body.itemId).then((item) => {
				if(item == null){
					res.json(404);
				}else{
					// ItemOrder.create(req.body).then((itemOrder) => {
					// 	if(itemOrder ==null){
					// 		res.json(404);
					// 	}else{
					// 		res.json(itemOrder);
					// 	}
					// });
				}
			});
		}	
		
	});
};

exports.removeItemFromOrder = async(req, res) => {
	Order.findById(req.body.orderId).then((order) => {
		if(order == null){
			res.json(404);
		}else{
			Item.findById(req.body.itemId).then((item) => {
				if(item == null){
					res.json(404);
				}else{
					//delete the ItemOrder Table containing the orderid and the itemid.
				}
			});
		}	
		
	});
};

exports.deleteOrder = async(req, res) => {
	Order.findById(req.params.id).then((order) => {
		if(order==null){
			res.json(404);
		}else{
			order.destory();
		}
	}).then(() =>{
		console.log("Order has been deleted");
	});
};



