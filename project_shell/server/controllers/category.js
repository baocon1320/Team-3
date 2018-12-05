	const { Category } = require('../models');
	const Sequelize = require('sequelize');

	// Gets a single Category the category's id
	exports.getCategoryById = async(req, res) => {
		try{	
			Category.findById(req.params.id).then((category) => {
				if(category == null){
					res.send(404)
				}else{
					if(req.params.id == 4){
						return res.send(303);
					}
					return res.json(category);
				}
			});
		}
		catch(err){
			console.log(err);
		}	
	};


	// Create a new Category
	exports.createCategory = async(req, res) => {
		try{
			//Create a new instance of an Account and save it
			Category.create(req.body).then((newCategory) => {
				//if the creation was unsuccessful
				//if the creation was successful send 
				//data to the front via json
				res.json(newCategory);
				
			}).catch(error => res.status(400).send(error));
		}
		catch(err){
			res.json(404);
			console.log(err)
		}	
		
	};

	//returns all of the categories
	exports.getAllCategories = async(req, res) => {
		try{
		Category.findAll().then((allCategories) => {
			if(allCategories == null){
				res.send(404);
			}else{
				res.json(allCategories);
			}
		});
		}
		catch (err) {
			console.log(err)
		}
	}

	//TODO add validation for Category
	exports.updateCategory = async(req,res) => {
		try{

			Category.update(req.body, { where: { id: req.params.id} }).then((affected) => {
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
			}).catch(error => res.status(400).send(error));
		} 
		catch(err){
			console.log(err)
		}
	
	};

	exports.deleteCategoryById = async(req, res) =>{
		try{
			Category.findById(req.params.id).then((category) => {
				if(category == null){
					res.send(404);
				}else{
					category.destroy();
					res.send(202);
				}
			});
		}
		catch(err){
			console.log(err);
			res.send(404);
		}

	};

	





