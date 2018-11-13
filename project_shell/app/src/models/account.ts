export class AccountModel{
	username!:string;
	password!:string;
	permission!:number;

	constructor(username:string, password:string, permission:string){
		this.username = username;
		this.password = password;
		this.permission = permission;
	}
}