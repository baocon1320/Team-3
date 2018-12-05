import axios from 'axios';
import { CategoryModel } from '@/models';


export class CategoryProvider {

	constructor(){
	}

	getCategoryById(id: string){	
		return axios.get('/api/category/id=' + id).then((response) => {
			return response.data;

		});
	}

	createCategory(category: CategoryModel){
		return axios.post('/api/category/', category).then((response) => {			
			return response.data;
		});
		
	}

	getAllCategories(){
		return axios.get('/api/category/all').then((response) => {
			return response.data;
			//returns all Categories;
		});
	}

	updateCategory(id: number, category:CategoryModel){
		return axios.put('/api/category/update/' + id, category).then((response) => {
			return response;
		});
	}

}



//TODO: Refactor providers to create an abstract provider that can all of the backend urls