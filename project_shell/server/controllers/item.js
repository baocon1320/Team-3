const { Item, ItemOrderFKs } = require('../models');
const { ItemOrderFKsController } = require('./itemorderfks');
const Sequelize = require('sequelize');


//returns a single item by it's id
exports.getItemById = async(req,res) => {
	Item.findById(req.params.id).then((item) => {
		if(item ==null){
			res.send(404);
		}else{
			res.json(item);
		}
	});
};


exports.getItemsByOrderId = async(req,res) => {
	//Acquire all of the itemorderfks for the cart via orderid
	console.log(typeof getItemOrderById);
	itemOrders = getItemOrderByOrderId(req.params.id);
	var itemIds = [];

	//Acquire all of the items from the itemOrders.
	for(i = 0; i < itemOrders.length; i++){
		itemIds.add(itemOrders[i].item_id);
	}
	console.log("ItemIds are:"  + itemIds);
	res.json(itemIds);

}




//returns all of the item's in the database, however sending this many 
//items over to the front would take incredibly long, please call getPageItems unless you NEED
//all items at once.
exports.getAllItems = async(req, res) => {
	try{
	Item.findAll().then((allItems) => {
		if(allItems == null){
			res.send(404);
		}else{
			res.json(allItems);
		}
	});
	}
	catch (err) {
		console.log(err)
	}
}


//returns all of the item's in the database, however sending this many 
//items over to the front would take incredibly long, please call getPageItems unless you NEED
//all items at once.
exports.getNumberofItem = async(req, res) => {
	try{
	Item.count().then((count) => {
		if(count == null){
			res.send(404);
		}else{
			res.json(count);
		}
	});
	}
	catch (err) {
		console.log(err)
	}
}

//returns a page's worth of items in the db, page number is given by the request
exports.getPageItems = async(req, res) => {
	ITEMS_PER_PAGE = 9;
	Item.findAll({ offset: req.params.pageNum * ITEMS_PER_PAGE, limit: ITEMS_PER_PAGE}).then((pageItems) => {
		if(pageItems ==null){
			res.send(404);
		}else{
			res.json(pageItems);
		}
	});
}

//returns a page's worth of items in the db, filtered by category
exports.getItemsByCategory = async(req, res) => {
	try{
		Item.findAll({where: {category_id: req.params.category_id}}).then((items) => {
			console.log(items);
			if(items == null){
				console.log("hit null check")
				res.send(404)
			}else{
				res.json(items);
			}
		});
	}
	catch(err){
		console.log(err)
	}
};

exports.getItemsByPrice = async(req, res) => {
	res.json(404);
};

//TODO add validation for update item
exports.updateItem = async(req,res) => {
	try{

		Item.update(req.body, { where: { id: req.params.id} }).then((affected) => {
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

//Creates a single Item for the store
exports.createItem = async(req, res) => {
	console.log("Running createItem...");
	console.log("createItem with: " + JSON.stringify(req.body));
	Item.create(req.body).then((response) => {
		res.json(response);
	});
};



function getItemOrderByOrderId(id) {
	try{
		ItemOrderFKs.findAll({
			where: {
				order_id: id
			}
		}).then((itemOrders) => {
			
			return itemOrders;
		});
		}
		catch (err){
			console.log(err);
		
		}
}