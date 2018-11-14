export class AccountModel{
	username!:string;
	password!:string;
	permission!:number;

	constructor(username:string, password:string, permission:number){
		this.username = username;
		this.password = password;
		this.permission = permission;
	}
}