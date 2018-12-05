export class OrderModel {
	id!: number;
	customerName !: string;
    creditCardNum!:string;
    securityCode!:number;
    priceTotal!:number;
    email!:string;
    phoneNumber!:string;
    date!:any;
    status!:string;

	constructor(id:number, customerName:string, creditCardNum:string, securityCode:number, priceTotal:number, email:string, phoneNumber:string, date:any, status:string){
		this.id = id;
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