	const { Manufacturer } = require('../models');
	const Sequelize = require('sequelize');

	// Gets a single Category the category's id
	exports.getManufacturerById = async(req, res) => {
		try{	
			Manufacturer.findById(req.params.id).then((manufacturer) => {
				if(manufacturer == null){
					res.send(404)
				}else{
					res.json(manufacturer);
				}
			});
		}
		catch(err){
			console.log(err);
		}	
	};


	// Create a new Category
	exports.createManufacturer = async(req, res) => {
		try{
			//Create a new instance of an Account and save it
			Manufacturer.create(req.body).then((newManufacturer) => {
				//if the creation was unsuccessful
				//if the creation was successful send 
				//data to the front via json
				res.json(newManufacturer);
				
			});}
		catch(err){
			res.json(404);
			console.log(err)
		}	
		
	};

	//returns all of the categories
	exports.getAllManufacturers = async(req, res) => {
		try{
		Manufacturer.findAll().then((allManufacturers) => {
			if(allManufacturers == null){
				res.send(404);
			}else{
				res.json(allManufacturers);
			}
		});
		}
		catch (err) {
			console.log(err)
		}
	}

	//TODO add validation for Category
	exports.updateManufacturer = async(req,res) => {
		try{

			Manufacturer.update(req.body, { where: { id: req.params.id} }).then((affected) => {
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
			});
		} 
		catch(err){
			console.log(err)
		}
	
	};

	





