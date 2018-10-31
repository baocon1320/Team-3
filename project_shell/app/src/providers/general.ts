import axios from 'axois';

export class GeneralProvider {
	constructor(){}

	getGeneralById(id){
		return axios.get('/api/general' + id);
	}

	updateGeneral(id, general){
		return axios.put('/api/general/update', {
			params: id,
			body: general
		});
	}
}