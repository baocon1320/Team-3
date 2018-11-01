const Sequelize = require('Sequelize');
const General = require('../models/general');

exports.getGeneralById = async(req,res) => {
	General.findById(req._id).then((general) => {
		if(general ==null){
			res.send(404);
		}else{
			res.json(general);
		}
	});
};

//TODO add validation for general
exports.updateGeneral = async(req,res) => {
	General.update(req.body, { where: { id: req.params.id} }).then((affected) => {
		if(affected != null){
			if(affected[0] > 0){
					res.send(202);
			}else{
				//TODO: Fix this to reflect the actual error
				res.send(404);
			}
		}else{
			res.send(404);
		}
	});
};

