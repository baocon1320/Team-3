export class AuthModel{
	token!:string;
	expirationTime!:string;
	accountId!:number;

	constructor(token:string, expirationTime:string, accountId:number){
		this.token = token;
		this.expirationTime = expirationTime;
		this.accountId = accountId;
	}
}