import axios from 'axios';
import { ItemModel } from '@/models/'

export class ItemProvider {
	constructor(){}

	getItemById(id: string){
		return axios.get('/api/item/id=' + id).then((response) => {
			return response.data;
		});
	}

	getAllItems(){
		return axios.get('/api/item/all').then((response) => {
			return response.data;
			//returns all Items;
		});
	}

	getPageItems(pageNum:  number){
		return axios.get('/api/item/pageItems/' + pageNum, {
			params: pageNum,
		}).then((pageItems: any) => {
			return pageItems;
		});
	}

	getItemsByCategory(id: string){
		return axios.get('/api/item/category=' + id).then((response) => {
			return response.data;
		});
	}

	getNumberofItem(){
		return axios.get('/api/item/countall').then((response) => {
			return response.data
		});
	}

	getItemsByOrderId(id: number){
		return axios.get('/api/item/order/' + id).then((response) => {
			return response.data;
		});
	}
}

