const { Account } = require('../models');
const Sequelize = require('sequelize');

// Gets a single Account the account's id
exports.getAccountById = async(req, res) => {
	console.log("Getting Account by Id");
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
		//Create a new instance of an Account and save it
		Account.create(req.body).then((newAccount) => {
			//if the creation was unsuccessful
			//if the creation was successful send 
			//data to the front via json
			res.json(newAccount);
			
		});}
	catch(err){
		res.json(404);
		console.log(err)
	}
	
};