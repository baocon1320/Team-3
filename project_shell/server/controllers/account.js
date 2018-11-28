const { Account } = require('../models');
const { Auth_Tokens } = require('../models');
const Sequelize = require('sequelize');
const jwt      = require('jsonwebtoken');

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

exports.getAccountByUser = async(req, res) => {
	try{
		Account.findOne({where: {username: req.params.username}}).then((account) => {
			//console.log(account)
			if(account == null){
				//console.log("hit null check")
				res.json(null)
				//res.send(404)
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
		console.log("There has been an error in login with the req: " + JSON.stringify(req));
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
		console.log("There has been an error in login with the req: " + JSON.stringify(req));
		res.json(404);
		console.log(err)
	}
}


// Create a new Account
exports.createAccount = async(req, res) => {
	try{
		console.log("createAccount has been called with " + JSON.stringify(req.body));
		//Create a new instance of an Account and save it
		Account.findOne({where: {username: req.body.username}}).then((account) => {
			if(account == null){
				Account.create(req.body).then((newAccount) => {
					console.log("Account has been created");
					const token = jwt.sign({ id: newAccount.id }, 'supersecret', {expiresIn: 86400});
					//if the creation was unsuccessful
					//if the creation was successful send 
					//data to the front via json
					res.json({auth: true, token: token, user: newAccount});
			
		});
			} else{
				res.json(null);
			}
		})
		
	}
	catch(err){
		console.log("There has been an error with the req: " + JSON.stringify(req));
		res.json(404);
		console.log(err)
	}
	
};

