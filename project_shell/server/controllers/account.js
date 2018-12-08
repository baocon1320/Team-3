const { Account } = require('../models');
const { Auth_Tokens } = require('../models');
const Sequelize = require('sequelize');
const jwt      = require('jsonwebtoken');

// Gets a single Account the account's id
exports.getAccountById = async(req, res) => {
	try{	
		Account.findById(req.params.id).then((account) => {
			if(account == null){
				//res.json(null);
				//res.send(404);
				res.status(404).send(null)
				
			}else{
				res.json(account);
			}
		});
	}
	catch(err){
		console.log(err);
	}	
};

exports.getAccountByAdmin = async(req, res) => {
	try{
		Account.findAll({
			where: {
				permission:  1
			}
		}).then((account) => {
			if(account == null){
				res.json({data: "HELLO WORLD"});
			}else{
				res.json(account);
			}
		});
	} catch(err){
		console.log(err);
	}
}

//returns all of the account

exports.getAllAccounts = async(req, res) => {
	try{
		Account.findAll().then((allAccounts) => {
			if(allAccounts == null){
				res.send(404);
			}else{
				res.json(allAccounts);
			}
		});
	}
	catch (err) {
		console.log(err)
	}
}

// Get an Account by username
exports.getAccountByUser = async(req, res) => {
	try{
		Account.findOne({where: {username: req.params.username}}).then((account) => {
			//console.log(account)
			if(account == null){
				//console.log("hit null check")			
				res.json(null);

				//res.send(404);
				//res.status(404).send(null);
			}else{
				res.json(account)
			}
		});
	}
	catch(err){
		console.log(err)
	}
}

// Delete an account
exports.deleteAccount = async(req, res) => {
	try {
		Account.findById(req.params.id).then((account) => {
			if(account == null){
				res.send(404)
			}else{
				Account.destroy({where: {id: req.params.id}}).then((u) => {
					res.json(account);
				});
			}
			
		});
		
	}
	catch(err){
		res.json(404);
		console.log(err)
	}
}

// Login
exports.loginAccount = async(req, res) => {
	try{
		Account.findOne({where: {username: req.body.username, 
			password: req.body.password}}).then((account) => {
				if(account == null){
					res.json(null)
				}else{
					const token = jwt.sign({ id: account.id }, 'supersecret', {expiresIn: 86400});
					Auth_Tokens.findOne({where: {accountId: account.id}}).then((auth) => {
						if(auth == null){
							Auth_Tokens.create({token: token, expirationTime: 86400, accountId: account.id}).then((onCreate) =>
							{})
						} else {
							Auth_Tokens.update({token: token, expirationTime: 86400}, 
								{where: {accountId: account.id}}).then((onUpdate) => 
								{})

							}
						})
					res.json({auth: true, token: token, user: account});

				}
			})
		}
		catch(err){
			res.json(404);
			console.log(err)
		}
	}


// Create a new Account
exports.createAccount = async(req, res) => {

	console.log("Running createAccount...");
	console.log("createAccount with: " + JSON.stringify(req.body));
	try{				
		Account.create(req.body).then((response) => {			
				res.json(response);
		}).catch(error => res.status(400).send(error));
	}
	catch(err){
		console.log(err);
	}
};

//Update Account
exports.updateAccount = async(req,res) => {
	try{

		Account.update(req.body, { where: { id: req.params.id} }).then((affected) => {
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

