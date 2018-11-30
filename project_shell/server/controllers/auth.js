const { Account } = require('../models');
const { Auth_Tokens } = require('../models');

exports.getTokenByAccountId = async(req, res) => {
	try{
		Auth_Tokens.findOne({where: {accountId: req.params.id}}).then((auth_token) => {
			if(auth_token == null){
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