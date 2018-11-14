import axios from 'axios';

export class ItemProvider {
	constructor(){}

	getItemById(id: number){
		return axios.get('/api/item' + id).then((item) => {
			return item;
		});
	}

	getAllItems(){
		return axios.get('/api/all').then((allItems) => {
			return allItems;
			//returns all Items;
		});
	}

	getPageItems(pageNum:  number){
		return axios.get('/api/pageItems/' + pageNum, {
			params: pageNum,
		}).then((pageItems: any) => {
			return pageItems;
		});
	}
}

export class ItemModel{
	description: string;
	price: number;
	stock: number;
	image: string;
	manufacturer: string;
	item_name: string;
	category_id: number

	constructor(description: string, price: number, stock: number,
				image: string, manufacturer: string, item_name: string,
				category_id: number){
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.image = image;
		this.manufacturer = manufacturer;
		this.item_name = item_name;
		this.category_id = category_id;
	}
}