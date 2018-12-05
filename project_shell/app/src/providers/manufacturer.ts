import axios from 'axios';
import { ManufacturerModel } from '@/models';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend

export class ManufacturerProvider {

	constructor(){
	}

	getManufacturerById(id: number){
		return axios.get('/api/manufacturer/id=' + id).then((response) => {
			return response.data;

		});
	}

	createManufacturer(manufacturer: ManufacturerModel){
		return axios.post('/api/manufacturer/', manufacturer).then((response) => {			
			return response.data;
		});
		
	}

	getAllManufacturers(){
		return axios.get('/api/manufacturer/all').then((response) => {
			return response.data;
			//returns all Categories;
		});
	}

	updateManufacturer(id: number, manufacturer:ManufacturerModel){
		return axios.put('/api/manufacturer/update/' + id, manufacturer)
		.then((response) => {
			return response;
		});
	}

}