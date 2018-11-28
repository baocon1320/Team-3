export class ItemModel{
	id!: number;
	description!: string;
	price!: number;
	stock!: number;
	image!: string;
	manufacturer_id!: number;
	category_id!: number;
	item_name!: string;	

	constructor(description: string, price: number, stock: number,
				image: string, manufacturer_id: number, category_id: number,
				item_name: string, id: number
				){
		this.id = id;
		this.description = description;
		this.price = price;
		this.stock = stock;
		this.image = image;
		this.manufacturer_id = manufacturer_id;
		this.category_id = category_id;
		this.item_name = item_name;
	}
}
