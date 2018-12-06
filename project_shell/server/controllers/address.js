const { Address } = require('../models');
const Sequelize = require('sequelize');

// Gets a single Account the account's id
exports.getAddressById = async(req, res) => {
	try{	
		Address.findById(req.params.id).then((address) => {
			if(address == null){
				res.send(404)
			}else{
				res.json(address);
			}
		});
	}
	catch(err){
		console.log(err);
	}	
};
// Create a new Account
exports.createAddress = async(req, res) => {
	try{
		//Create a new instance of an Account and save it
		Address.create(req.body).then((newAddress) => {
			//if the creation was unsuccessful
			//if the creation was successful send 
			//data to the front via json
			res.json(newAddress);
			
		}).catch(error => res.status(400).send(error));
	}
	catch(err){
		res.json(404);
		console.log(err)
	}
	
};

//updates an exitsting Address
exports.updateAddress = async(req, res) => {
	try{
		Address.update(req.body, { where: { id: req.params.id} }).then((affected) => {
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