export class GeneralModel {
	storeHours: string;
    phoneNumber: string;
    storeDescription: string;
    textBody: string;

	constructor(storeHours: string, phoneNumber: string, 
		storeDescription: string, textBody: string) {
		this.storeHours = storeHours;
		this.phoneNumber = phoneNumber;
		this.storeDescription = storeDescription;
		this.textBody = textBody;
	}

}