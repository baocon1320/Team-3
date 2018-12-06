const { Order } = require('../models');
const { Item } = require('../models');
// const ItemOrder = require('../models/ItemOrder');
const Sequelize = require('sequelize');


//returns a getOrderById item by it's id
exports.getOrderById = async(req,res) => {
	Order.findById(req.params.id).then((order) => {
		if(order ==null){
			res.send(404);
		}else{
			res.json(order);
		}
	});
};

// Get order by orderid and email, use for tracking
exports.getOrderByEmailAndId = async(req,res) => {
	Order.findOne({
		where: {id: req.params.id, email: req.params.email}
	}).then((order) => {
		if(order == null){
			return res.json(null);
		} else {
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

//returns all of the order's in the database, however sending this many 
//items over to the front would take incredibly long, please call getPageItems unless you NEED
//all order at once.
exports.getAllOrders = async(req, res) => {
	try{
	Order.findAll().then((allOrders) => {
		if(allOrders == null){
			res.send(404);
		}else{
			res.json(allOrders);
		}
	});
	}
	catch (err) {
		console.log(err)
	}
}


//Update Order
exports.updateOrder = async(req,res) => {
	try{

		Order.update(req.body, { where: { id: req.params.id} }).then((affected) => {
			if(affected != null){
				if(affected[0] > 0){
					res.send(200);
				}else{
					//TODO: Fix this to reflect the actual error
					res.send(404);
				}
			}else{
				res.send(404);
			}
		}).catch(error => res.status(400).send(error));
	} 
	catch(err){
		console.log(err)
	}
	
};



