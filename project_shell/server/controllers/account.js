const { Account } = require('../models');
const Sequelize = require('sequelize');

// Gets a single Account the account's id
exports.getAccountById = async(req, res) => {
	try{	
		Account.findById(req.params.id).then((account) => {
			if(account == null){
				res.send(404)
			}else{
				res.json(account);
			}
		});
	}
	catch(err){
		console.log("find acc by id failed");
		console.log(err);
	}	
};
exports.getAccountByUser = async(req, res) => {
	try{
		Account.findOrCreate({where: {username: req.params.username }}).then((account) => {
			console.log(account)
			if(account == null){
				console.log("hit null check")
				res.send(404)
			}else{
				res.json(account.username)
			}
		});
	}
	catch(err){
		console.log(err)
	}
}

// Create a new Account
exports.createAccount = async(req, res) => {
	try{
		console.log("Trying createAccount");
		console.log("Body is: " + JSON.stringify(req.body));
		//Create a new instance of an Account and save it
		Account.create(req.body).then((newAccount) => {
			console.log("Create has been run");
			//if the creation was unsuccessful
			//if the creation was successful send 
			//data to the front via json
			res.json(newAccount);
			
		});}
	catch(err){
		console.log("Create Account has failed.");
		res.json(404);
		console.log(err)
	}
	
};