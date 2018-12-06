import axios from 'axios';
import { ItemOrderFKModel } from '@/models';

// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend

export class ItemOrderProvider {

	constructor(){
	}

	getItemOrderFKById(id: number){	
		return axios.get('/api/itemOrderFKs/single/id=' + id).then((response) => {
			return response.data;
		});
	}

	getAllItemOrderFKs(){
		return axios.get('/api/itemOrderFKs/all').then((response) => {
			return response.data;
		});
	}

	getItemOrderByItemId(id: number){
		return axios.get('/api/itemOrderFKs/item/' + id).then((response) => {
			return response.data;
		});
	}

	getItemOrderFKByOrderId(id: number){
		return axios.get('/api/itemOrderFKs/order/' + id).then((response) => {
			return response.data;
		});
	}

	getItemOrderFKByItemandOrderId(itemId:number, orderId:number){
		return axios.get('/api/itemOrderFKs/itemOrder/' + itemId + '/' +  orderId).then((response) => {
			return response.data;
		});
	}

	createItemOrderFK(itemOrder: ItemOrderFKModel){
		console.log("Creating ItemOrderFk....");
		return axios.post('/api/itemOrderFKs/', itemOrder).then((response) => {			
			return response.data;
		});
	}

	updateItemOrderFK(id: number, itemOrder: ItemOrderFKModel){
		return axios.put('/api/itemOrderFKs/update/' + id, itemOrder).then((response) => {
			return response.data;
		});
	}

	deleteByItemId(id: number){
		return axios.delete('/api/itemOrderFKs/item/' + id).then((response) => {
			return response.data;
		});
	}

	deleteByItemOrderId(id: number){
		return axios.delete('/api/itemOrderFKs/' + id).then((response) => {
			return response.data;
		});
	}
}