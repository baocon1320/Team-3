import axios from 'axios';
import { OrderModel } from '@/models';

// This means we need to figure out the import, the command
//to call the http requests and then how to it sends the data 
//on over to the backend

export class OrderProvider {

	constructor(){
	}

	getOrderById(id: number){	
		return axios.get('/api/order/id=' + id).then((response) => {
			return response.data;
		});
	}

	createOrder(order: OrderModel){
		return axios.post('/api/order/create', order).then((response) => {			
			return response.data;
		});
	}

	updateOrder(id: number, order: OrderModel){
		return axios.put('/api/order/update/' + id, order).then((response) => {
			return response.data;
		});
	}

	getAllOrder(){
		return axios.get('/api/order/all').then((response) => {
			return response.data;
		});
	}

	getOrderByEmailAndId(id: number, email: string){	
		return axios.get('/api/order/getByEmailAndId/'+ id + '/' +  email).then((response) => {
			return response.data;
		});
	}


}