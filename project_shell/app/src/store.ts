import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  		username: ''
  },
  mutations: {
  		CHANGE_USENAME(state, payload) {
    	state.username = payload;
  }
  },
  actions: {
  	changeUsername(context, username) {
    context.commit("CHANGE_USENAME", username);
  }
  },
  getters: {
  	//return state.username;
  	getUsername(state) {
    return state.username;
  	}
  },
});
