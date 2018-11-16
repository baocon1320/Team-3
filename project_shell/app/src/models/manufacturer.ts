export class ManufacturerModel {
	/**
	TODO: define all of the fields for ManufacturerModel via variables and constructor to create a type for the above functions
	*/
	//id!: number;
	name!: string;
    description!: string;
    image!: string;

	constructor(name: string, description: string, image: string){
		this.name = name;
		this.description = description;
		this.image = image;
	}

}