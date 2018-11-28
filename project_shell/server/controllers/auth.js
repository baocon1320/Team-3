const { Account } = require('../models');
const { Auth_Tokens } = require('../models');

exports.getTokenByAccountId = async(req, res) => {
	try{
		Auth_Tokens.findOne({where: {accountId: req.params.id}}).then((auth_token) => {
			//console.log(account)
			if(auth_token == null){
				//console.log("hit null check")
				res.json(null)
				//res.send(404)
			}else{
				res.json(auth_token)
			}
		});
	}
	catch(err){
		console.log(err)
	}
}