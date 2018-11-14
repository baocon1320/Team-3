import axios from 'axios';

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
		// return new AccountModel(response.username, response.password, response.permission);
	}

}

export class AccountModel {
	/**
	TODO: define all of the fields for AccountModel via variables and constructor to create a type for the above functions
	*/
	//id!: number;
	username!: string;
	password!: string;
	permission!: number;

	constructor(username: string, password: string, permission: number){
		this.username = username;
		this.password = password;
		this.permission = permission;
	}

}

//TODO: Refactor providers to create an abstract provider that can all of the backend urls