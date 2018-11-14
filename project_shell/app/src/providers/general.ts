import axios from 'axios';

export class GeneralProvider {
	constructor(){}

	getGeneralById(id: number){
		return axios.get('/api/general/' + id).then((response) => {
			return response.data;
		});
	}


	updateGeneral(id: number, general:GeneralModel){
		return axios.put('/api/general/update/' + id, general).then((response) => {
			return response;
		});
	}
}

export class GeneralModel {
	/**
	TODO: define all of the fields for AccountModel via variables and constructor to create a type for the above functions
	*/
	storeHours: string;
    phoneNumber: string;
    storeAddress: string;
    storeDescription: string;
    generalTextBody: string;

	constructor(storeHours: string, phoneNumber: string, storeAddress: string, 
		storeDescription: string, generalTextBody: string) {
		this.storeHours = storeHours;
		this.phoneNumber = phoneNumber;
		this.storeAddress = storeAddress;
		this.storeDescription = storeDescription;
		this.generalTextBody = generalTextBody;
	}

}