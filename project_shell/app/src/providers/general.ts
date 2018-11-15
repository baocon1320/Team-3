import axios from 'axios';
import { GeneralModel } form '@/models';

export class GeneralProvider {
	constructor(){}

	getGeneralById(id: number){
		return axios.get('/api/general/' + id).then((response) => {
			return response.data;
		});
	}


	updateGeneral(id: number, general:GeneralModel){
		return axios.put('/api/general/update/' + id, general).then((response) => {
			return response;
		});
	}
}

