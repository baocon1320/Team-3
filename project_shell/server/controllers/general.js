const Sequelize = require('sequelize');
const { General } = require('../models');

exports.getGeneralById = async(req,res) => {
	General.findById(req.params.id).then((general) => {
		if(general ==null){
			res.json(null);
		}else{
			res.json(general);
		}
	});
};

//TODO add validation for general
exports.updateGeneral = async(req,res) => {
	try{

		General.update(req.body, { where: { id: req.params.id} }).then((affected) => {
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

exports.createGeneral = async(req, res) => {
	try{
		General.create(req.body).then((response) => {
			if(response == null){
				res.send(404);
			}else{
				res.json(response);
			}
		});
	}catch(err){
		res.send(404);
	}
};

