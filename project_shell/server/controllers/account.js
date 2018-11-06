const Account = require('../models/account');
const Sequelize = require('sequelize');

// Gets a single Account the account's id
exports.getAccountById = async(req, res) => {
	Account.findById(req.params.id).then((account) => {
		if(account == null){
			res.send(404)
		}else{
			res.json(account);
		}
	});
};

// Create a new Account
exports.createAccount = async(req, res) => {
	try{
		console.log("Trying createAccount");
		//Create a new instance of an Account and save it
		Account.create(req.body).then((newAccount) => {
			console.log("Create has been run");
			//if the creation was unsuccessful
			if(newAccount == null){
				res.send(404);
			}else{
			//if the creation was successful send 
			//data to the front via json
				res.json(newAccount);
			}
		});
	}catch(err){
		console.log("Create Account has failed.");
		res.json(404);
	}
	
};