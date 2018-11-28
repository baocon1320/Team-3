import axios from 'axios';
import { AuthModel } from '@/models';

export class AuthProvider {

	constructor(){
	}

	getTokenByAccountId(accountId: number){
		return axios.get('/api/auth/accountId=' + accountId).then((response) => {
			return response.data;
		});
	}
}