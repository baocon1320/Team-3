<template>
  <div>
  	<img src="../assets/service.gif"/>
  	<h3> This is admin view </h3>
  	<v-btn @click="submit">getToken</v-btn>
  	<span>Token is  {{check}}</span>
  </div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src
import { AuthModel } from '@/models/auth';
import { AuthProvider } from '@/providers/auth';



@Component({
  components: {
    Login,
  },
})
export default class LoginView extends Vue {
  check: string = '';
  token: AuthModel = new AuthModel('','',0);
  authprovider: AuthProvider = new AuthProvider();
 	//mounted() {
 	//	this.$forceUpdate();
 	//	this.fetchData();
 	//}
   submit() {
   	this.authprovider.getTokenByAccountId(15).then(data => {
        if(data != null){
        	this.check = data.token;
        }
   });
	}
        

  }

</script>
