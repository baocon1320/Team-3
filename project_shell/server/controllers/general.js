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

exports.updateGeneral = async(res,req) => {
	General.update(req.body, { where: { id: req.params.id} }).then((affected) => {
		if(affected.length > 0){
			if(affected[0] > 0){
				res.send(202);
			}
		}else{
			res.send(404);
		}
	});
};

