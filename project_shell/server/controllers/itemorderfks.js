const { ItemOrderFKs } = require('../models');
const Sequelize = require('sequelize');

//returns a single item by it's id
exports.getItemOrderById = async(req,res) => {
	ItemOrderFKs.findById(req.params.id).then((itemOrder) => {
		if(itemOrder == null){
			res.sendStatus(404);
		}else{
			res.json(itemOrder);
		}
	});
};

//returns all of the item's in the database, however sending this many 
//items over to the front would take incredibly long, please call getPageItems unless you NEED
//all items at once.
exports.getAllItemOrders = async(req, res) => {
	try{
		ItemOrderFKs.findAll().then((allItemOrders) => {
			if(allItemOrders == null){
				res.sendStatus(400);
			}else{
				res.json(allItemOrders);
			}
		});
	}
	catch (err) {
		console.log(err);
	}
};

exports.getItemOrderByIOIds = async(req, res) => {
	try{
		ItemOrderFKs.findAll({
			where:{
				item_id: req.params.itemId,
				order_id: req.params.orderId
			}
		}).then((itemOrders) => {
			console.log(JSON.stringify(itemOrders));
			res.json(itemOrders);
		})
	}catch(err){
		console.log(err);
		res.sendStatus(400);
	}
};

exports.getItemOrderByItemId = async(req, res) => {
	try{
		ItemOrderFKs.findAll({
			where: {
				item_id: req.params.id
			}
		}).then((itemOrders) => {
			res.json(itemOrders);
		});
	}catch(err){
		console.log(err);
	}
}

//This function get the itemOrders that have a specified orderId then returns them.
exports.getItemOrderByOrderId = async(req, res) => {
	try{
		ItemOrderFKs.findAll({
			where: {
				order_id: req.params.id
			}
		}).then((itemOrders) => {
			res.json(itemOrders);
		});
	}
	catch (err){
		console.log(err);
	}
}

//TODO add validation for update item
exports.updateItemOrder = async(req,res) => {
	try{
		ItemOrderFKs.update(req.body, { where: { id: req.params.id} }).then((affected) => {
			if(affected != null){
				if(affected[0] > 0){
						res.send(200);
				}else{
					res.send(404);
				}
			}else{
				res.send(404);
			}
		});
	} 
	catch(err){
		console.log(err)
	}	
};

//Creates a single ItemOrderFK for the store
exports.createItemOrder = async(req, res) => {
	ItemOrderFKs.create(req.body).then((response) => {
		if(response == null){
			res.send(404);
		}
		res.json(response);
	});
};

exports.deleteByItemId = async(req, res) => {
	try{
		ItemOrderFKs.findAll({
			where: {
				item_id: req.params.id
			}
		}).then((itemOrder) => {
			if(itemOrder === null){

			}else{
				ItemOrderFKs.destroy({
					where: {
						item_id: req.params.id
					}
				});
				res.json(200);
			}
		});
	}catch(err){
		console.log(err);
	}
}

exports.deleteById = async(req, res) => {
	try{
		ItemOrderFKs.findById(req.params.id).then((itemOrder) => {
			if(itemOrder == null){

			}else{
				ItemOrderFKs.destroy({
					where: {
						id: req.params.id
					}
				});
				res.json(200);
			}
		});
	}catch(err){
		console.log(err);
	}
}