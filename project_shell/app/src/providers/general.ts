import axios from 'axios';

export class GeneralProvider {
	constructor(){}

	getGeneralById(id: number){
		return axios.get('/api/general' + id);
	}

	updateGeneral(id: number, general: any){
		return axios.put('/api/general/update', {
			params: id,
			body: general
		});
	}

	
}