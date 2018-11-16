import axios from 'axios';
import { AccountModel } from '@/models';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend

export class AccountProvider {

	constructor(){
	}

	getAccountById(id: number){	
		return axios.get('/api/account/' + id).then((response) => {
			return response.data;
		});
	}

	getAccountByUser(username: string){
		return axios.get('/api/account/' + username).then((response) => {
			return response;
		});
	}

	createAccount(account: AccountModel){
		return axios.post('/api/account/', account).then((response) => {			
			return response.data;
		});
	}

}