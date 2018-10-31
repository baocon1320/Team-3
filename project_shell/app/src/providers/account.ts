import axios from 'axios';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend

export class AccountProvider {

	constructor(){
	}
	getAccountById(id){
		axios.get('/api/account/' + id).then((response) => {
			return response;
		});
	}

	createAccount(account){
		return axois.post('/api/account/create', account);
	}

}