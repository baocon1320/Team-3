
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
              type="password"
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
  valid: boolean = true;
  check: number = 0;
  account: AccountModel = new AccountModel('','',0);
  accountprovider: AccountProvider = new AccountProvider();
  username: string = '';
  password: string = '';

  // Clear the forms
  clear () {
    (this.$refs.form as any).reset();
    this.check = 0;
  }

    // For the permission of the account 
    // 1 mean the owner, 2 mean the employee
    // Login
    submit() {
      if ((this.$refs.form as any).validate()) {
        this.account.username = this.username;
        this.account.password = this.password;
        this.accountprovider.accountLogin(this.account).then(data => {
          if(data == null){
            this.check = 1;
          }else{
            const is_owner = data.user.permission;
            this.account = data.user;
            this.account.password = '***';
            localStorage.setItem('user', JSON.stringify(this.account));
            localStorage.setItem('jwt', data.token);
            this.$store.dispatch("changeUsername", this.username);
            if(localStorage.getItem('jwt') != null){
              if(this.$route.params.nextUrl != null){
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push('manage/changepassword');
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
</style>
