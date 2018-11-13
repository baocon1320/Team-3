import axios from 'axios';

//TODO: Figure out how to make Http requests in vue.js
// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend
//

export class AccountProvider {

	async getAccountById(id: number) {
		const inst = axios.create({
			proxy:{
				host: '127.0.0.1',
				port: 3000,
				auth: {
					username: 'root',
					password: 'password'
				}
			}
		});
		
		inst.get('/account/' + id).then((response) => {
			return response; 
		});
	}


	async createAccount(account: AccountModel) {
		const inst = axios.create({
			proxy:{
				host: '127.0.0.1',
				port: 3000,
				auth: {
					username: 'root',
					password: 'password'
				}
			},
			data: {
				username: account.username,
				password: account.password,
				permission: account.permission
			}
		});
		
		return inst.post('account/create').then((response) => {
			console.log("Response is:" + JSON.stringify(response));
		});
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