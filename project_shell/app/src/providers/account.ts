import axios from 'axios';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend
//

export class AccountProvider {


	async getAccountById(id: number) {
		
		axios({
			method: 'get',
			url: 'http://localhost:3000/account/' + id,
			responseType: 'stream'
		}).then( (response) => {
			console.log("Response is: " + response);
		}).catch((err) => {
			console.log("Error occured");
			console.log(err);
		});
		// return axios.get('http://localhost:3000' + 'account/' + id).then( (response) => {
		// 	console.log("Response is: " + response);
		// }).catch((err) => {
		// 	console.log("Error occured");
		// 	console.log(err);
		// });
	}

	async createAccount(account: AccountModel) {
		return axios.post('/api/account/create', account);
			// return new AccountModel(response.username, response.password, response.permission);
	}

}

export class AccountModel {
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