export class AddressModel{
	streetOne!: string;
	streetTwo!:string;
	city!:string;
	state!:string;
	zipcode!:string;
   

	constructor(streetOne:string, streetTwo:string, city:string,
				state:string, zipcode:string){
		this.streetOne = streetOne;
		this.streetTwo = streetTwo;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
	}
}