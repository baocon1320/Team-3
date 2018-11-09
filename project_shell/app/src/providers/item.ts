import axios from 'axios';

export class ItemProvider {
	constructor(){}

	getItemById(id: number){
		axios.get('/api/item' + id).then((item) => {
			return ItemModel(item.description, item.price, item.stock,
							 item.image, item.manufacturer, item.item_name,
							 item.category_id);
		});
	}

	getAllItems(){
		axios.get('/api/all').then((allItems) => {
			return allItems;
		});
	}

	getPageItems(pageNum){
		axios,get('/api/pageItems/' + pageNum, {
			params: pageNum,
		}).then((pageItems) => {
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