export class OrderModel {
	customerName !: string;
    creditCardNum!:string;
    securityCode!:number;
    priceTotal!:number;
    email!:string;
    phoneNumber!:string;
    date!:any;
    status!:string;

	constructor(customerName:string, creditCardNum:string, securityCode:number, priceTotal:number, email:string, phoneNumber:string, date:any, status:string){
		this.customerName = customerName;
		this.creditCardNum = creditCardNum;
		this.securityCode = securityCode;
		this.priceTotal = priceTotal;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.date = date;
		this.status = status;
	}
}