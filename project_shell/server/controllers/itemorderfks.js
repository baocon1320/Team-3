const { ItemOrderFKs } = require('../models');
const Sequelize = require('sequelize');

//returns a single item by it's id
exports.getItemOrderById = async(req,res) => {
	ItemOrderFKs.findById(req.params.id).then((itemOrder) => {
		if(item == null){
			res.send(404);
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
			if(allItems == null){
				res.send(404);
			}else{
				res.json(allItemOrders);
			}
		});
	}
	catch (err) {
		console.log(err);
	}
};


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

// async function getItemOrderByOrderId(id){
// 	try{
// 		ItemOrderFKs.findAll({
// 			where: {
// 				order_id: req.params.id
// 			}
// 		}).then((itemOrders) => {
// 			return itemOrders;
// 		});
// 	}
// 	catch (err){
// 		console.log(err);
// 	}
// }

// export { getItemOrderById };

//TODO add validation for update item
exports.updateItemOrder = async(req,res) => {
	try{
		ItemOrderFKs.update(req.body, { where: { id: req.params.id} }).then((affected) => {
			if(affected != null){
				if(affected[0] > 0){
						res.send(202);
				}else{
					//TODO: Fix this to reflect the actual error
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
		res.send(202);
	});
};

// module.exports = {
// 	getItemOrderById : function(id) {
// 		try{
// 		ItemOrderFKs.findAll({
// 			where: {
// 				order_id: req.params.id
// 			}
// 		}).then((itemOrders) => {
// 			return itemOrders;
// 		});
// 		}
// 		catch (err){
// 			console.log(err);
		
// 		}
// 	}
// }