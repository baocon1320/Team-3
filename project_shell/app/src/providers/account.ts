import axios from 'axios';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend
//

export default class AccountProvider {

	constructor(){
	}

	getAccountById(id: number){
		axios.get('/api/account/' + id).then((response) => {
			return response;
		});
	}

	createAccount(account: AccountModel){
		axios.post('/api/account/create', account).then((response) => {
			// return new AccountModel(response.username, response.password, response.permission);
			return response;
		});
	}

}

export class AccountModel{
	/**
	TODO: define all of the fields for AccountModel via variables and constructor to create a type for the above functions
	*/
	username: string;
	password: string;
	permission: number;

	constructor(username: string, password: string, permission: number){
		this.username = username;
		this.password = password;
		this.permission = permission;
	}

}

//TODO: Refactor providers to create an abstract provider that can all of the backend urls