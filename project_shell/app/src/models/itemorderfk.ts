export class ItemOrderFKModel {
	
	item_id!: number;
    order_id!: number;
    quantity!: number;
    item_price!:number;
    id!:number;

	constructor(item_id:number, order_id:number, quantity:number, item_price:number){
		this.item_id = item_id;
		this.order_id = order_id;
		this.quantity = quantity;
		this.item_price = item_price;
	}
}