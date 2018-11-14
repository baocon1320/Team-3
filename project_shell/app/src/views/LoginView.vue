<template>
  <div class="home">
    <div id="loginBox">
      <img id='logo' src='../assets/foxycleLogo.png'/>
      <v-form id='form' v-model="valid">
        <v-text-field
        v-model="userName"
        label="UserName"
        required
        ></v-text-field>
        <v-text-field
        v-model="password"
        label="Password"
        required
        ></v-text-field>
      </v-form>
      <button id="loginButton" outline absolute v-on:click="createAccount">
            Login
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AccountProvider } from '@/providers'; // imports the account provider for logins
import { AccountModel } from '@/models';
import Login from '@/components/Login.vue'; // @ is an alias to /src


@Component({
  components: {
  Login,
  },
  })
export default class LoginView extends Vue {
    userName: string = '';
    password: string = '';
    permission: number = 1;
    accountService!:AccountProvider;

    mounted() {
      this.accountService = new AccountProvider();
      console.log('LoginView is mounted');
    }

    async loginButtonPress() {
      console.log('Running login ButtonPress');
      if (this.accountService != null) {
        await this.accountService.getAccountById(5);
      }
    }

    async createAccount(){
      this.permission = 1;
      // check if all of the fields are filled in
      if(this.fieldsAreValid(this.userName, this.password, this.permission)){
        // ensure the Service provider is not null
        if(this.accountService != null){
          // Make the fields into the AccountModel
          let accountModel = new AccountModel(this.userName, this.password, this.permission);
          // API call to create an account.
          console.log("About to make API call");
          let success = await this.accountService.createAccount(accountModel);
          console.log("Success is:" + success);
          // if(success == 202){
          //   //When nothing went wrong
          // }else if (success == 203){
          //   //When the userName or password was already taken
          // }else if(success == 204){
          //   //Another issue?
          // }
        }
      }
    }

    // This function's purpose is to perform validation for createAccount, all of the fields should be full.
    fieldsAreValid(username: string, password: string, permission: number) :  boolean{
      if(username == ''){
        // Make the userName field RED
        return false;
      } else if(password === ''){
        // Make the password field RED
        return false;
      } else if (permission > 1){
        // Make the permission field RED
        return false;
      } else{
        // All the field have been filled out.
        return true;
      }
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
        background-size: contain;
        position: relative;
    }
    #logo{
        width: 100px;
        height: 100px;
        display: table-column;
    }

</style>
