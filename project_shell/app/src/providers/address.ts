import axios from 'axios';
import { AddressModel } from '@/models';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend

export class AddressProvider {

	constructor(){
	}

	getAddressById(id: string){	
		return axios.get('/api/address/id=' + id).then((response) => {
			return response.data;

		});
	}

	createAddress(address: AddressModel){
		return axios.post('/api/address/', address).then((response) => {			
			return response.data;
		});
		
	}

	updateAddress(id: number, address:AddressModel){
		return axios.put('/api/address/update/' + id, address).then((response) => {
			return response;
		});
	}

}



//TODO: Refactor providers to create an abstract provider that can all of the backend urls