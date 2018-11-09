const Item = require('../models/item');
const Sequelize = require('sequelize');


//returns a single item by it's id
exports.getItemById = async(req,res) => {
	Item.findById(req.params.id).then((item) => {
		if(general ==null){
			res.send(404);
		}else{
			res.json(item);
		}
	});
};


//returns all of the item's in the database, however sending this many 
//items over to the front would take incredibly long, please call getPageItems unless you NEED
//all items at once.
exports.getAllItems = async(req, res) => {
	Item.findAll().then((allItems) => {
		if(allItems == null){
			res.send(404);
		}else{
			res.json(allItems);
		}
	});
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
exports.getItemsByCateogry = async(req, res) => {
	res.json(404);
}

exports.getItemsByPrice = async(req, res) => {
	res.json(404);
}

