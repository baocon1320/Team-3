
<template>
  <div class="login_page">
    <div id="app">
      <v-app id="inspire">      
        <v-form ref="form" v-model="valid" lazy-validation>
         <v-container grid-list-md class="main_color">
          <v-layout wrap>
            <span class="display-1 font-weight-regular">Login to Foxycle</span>
            <v-flex xs12>
              <v-text-field
              v-model="username"
              :rules="[v => !!v || 'UserName is required']"
              label="UserName"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
              v-model="password"
              :rules="[v => !!v || 'Password is required']"
              label="Password"
              required
              ></v-text-field>
            </v-flex>
            <v-btn
            :disabled="!valid"
            @click="submit"
            >
            submit
          </v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-layout>
      </v-container>
    </v-form>
  </v-app>
  <div v-if="check == 1" class="v-messages theme--light error--text subheading font-weight-light error-center"> Incorrect username or Password </div>
  <span>and check is {{check}}</span>
</div>
  <!-- <div class="home">
    <div id="loginBox">
 v-messages theme--light error--text   Incorrect username or Password     
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

  </div> -->
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
  check: number = 0;
  account: AccountModel = new AccountModel('','',0);
  new_account!: AccountModel;
  accountprovider: AccountProvider = new AccountProvider();
  username: string = '';
  password: string = '';

  clear () {
    this.$refs.form.reset();
    this.check = 0;
  }

    // mounted() {
    //   this.accountprovider.getAccountById(1).then(data => {
    //     this.account = data;
    //   })     
    // }

    submit() {
      if (this.$refs.form.validate()) {
        // this.new_account = new AccountModel(this.username, this.password, 3);
        // this.accountprovider.createAccount(this.new_account).then (data => {
        //     this.account = data;
        // })

        // this.accountprovider.getAccountByUser(this.username).then(data => {
        //   if(data != null) {
        //     this.account = data;
        //     this.check = 1;
        //     if(this.account.password == this.password) {
        //       this.check = 2;
        //     }
        //   } else {
        //     this.check = 1;

        //   }
        // }) 
        this.account.username = this.username;
        this.account.password = this.password;
        this.accountprovider.accountLogin(this.account).then(data => {
          if(data == null){
            this.check = 1;
          }else{
            const is_owner = data.user.permission;
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('jwt', data.token);
            this.$store.dispatch("changeUsername", this.username);
            if(localStorage.getItem('jwt') != null){
              if(this.$route.params.nextUrl != null){
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if(is_owner == 1){
                  //this.$router.push('home');
                  
                  this.$router.push('owner');
                  //this.$router.go(1);
                  //this.fetchData();
                }else{
                  //this.$router.push('home');
                  //this.$router.go(1);
                  this.$router.push('admin');
                  //this.fetchData();
                }
              }
            }
            this.check = 2;
          }
        })

      }   
    }

  }

</script>

<style lang='scss'>
.error-center {
  text-align: center;
}

.login_page {
  background-color: #f7f7f7;
  width: 400px;
  margin: auto;
  padding-top: 120px;
  height: 700px;
}
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
