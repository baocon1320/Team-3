
<template>
  <div class="home">
    <div id="loginBox">
        <!--<img id='logo' src='../assets/foxycleLogo.png'></img>-->
   	    <v-form id='form' v-model="valid">
            <v-text-field
            v-model="username"
            label="UserName"
            required
            ></v-text-field>
            <v-text-field
            v-model="password"
            label="Password"
            :type="'password'"
            required
            ></v-text-field>
        </v-form>
        <v-btn v-on:click="submit">
        Enter
    </v-btn >
        <h1> userName is : {{ account.username }} </h1>
        <h1> passWord is : {{ account.password}} </h1>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src
import { AccountModel } from '@/models/account';
import { AccountProvider } from '@/providers/account';



@Component({
  components: {
  Login,
  },
  })
  export default class LoginView extends Vue {
    account: AccountModel = new AccountModel('','',0);
    new_account!: AccountModel;
    accountprovider: AccountProvider = new AccountProvider();
    username: string = '';
    password: string = '';
    
    mounted() {
      this.accountprovider.getAccountById(1).then(data => {
        this.account = data;
      })     
    }

    submit() {
        this.new_account = new AccountModel(this.username, this.password, 3);
        this.accountprovider.createAccount(this.new_account).then (data => {
            this.account = data;
        })
    }

  }

</script>

<style lang='scss'>
    #loginBox{
        padding-top: 10%;
        height: auto;
        width: auto;
        border-color: black;
        text-align: center;
    }
    #form{
        color: #41A4FF;
        display: inline-block;
    }
    #loginButton{
        display: inline-block;
        object-position: center;
        position: relative;
    }
    #signUp{
        display: inline-block;
        object-position: center;
        position: relative;
    }
    #logo{
        width: 100px;
        height: 100px;
        display: table-column;
    }

</style>
