<template>
  <div class="application--wrap bgcolor">
      <div class = "left_display v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open">
        <ManagerBar></ManagerBar>
      </div>
      <div class = "right_display">
        <div class = "item_redirect">
          <div class="subheading blue--text"> Change Password > </div>
        </div>
        <div class="login_page">
    <div id="app">
      <v-app id="inspire">      
        <v-form ref="form" v-model="valid" lazy-validation>
         <v-container grid-list-md class="main_color">
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field
              v-model="username"
              label="UserName"
              disabled="true"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
              v-model="curPassword"
              :rules="[v => !!v || 'Password is required']"
              label="Current Password"
              type="password"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
              v-model="newPassword1"
              :rules="[v => !!v || 'Password is required',
                      v => (v && v != curPassword) || 'new password must is differ from old one']"
              label="New Password"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
              v-model="newPassword2"
              :rules="[v => (v && v == newPassword1) || 'password must be the same']"
              label="Confirm New Password"
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
  <div v-if="check == 1" class="v-messages  error--text subheading font-weight-light error-center"> Incorrect Password </div>
   <div v-if="check == 2" class="v-messages   subheading font-weight-light error-center"> Change Password Successfully</div>
</div>
</div>
        <PageNumber v-bind:total_count="total_count" 
                    v-on:changePage="switchPage($event)">
        </PageNumber>        
      </div>       
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ManagerBar from '@/components/ManagerBar.vue'
import {  AccountModel } from '@/models';
import {  AccountProvider } from '@/providers';



@Component({
  components: {
    ManagerBar
  },
})
export default class PasswordManagerView extends Vue {
  check: number = 0;
  valid: boolean = true;
  username: string = '';
  curPassword: string ='';
  newPassword1: string ='';
  newPassword2: string = '';
  accountprovider: AccountProvider = new AccountProvider();
  account: AccountModel = new AccountModel('','',0);
  
  // Load the name of current user from local storage
  mounted() {
    if(localStorage.getItem('user') != null){
        const userJson = localStorage.getItem('user');
        this.account = userJson !== null ? JSON.parse(userJson) : null; 
        this.username = this.account.username;
      }

  }

  // Clear the form
  clear () {
    (this.$refs.form as any).reset();
  }

  // submit to change the password
  submit() {
    if ((this.$refs.form as any).validate()) {
      this.accountprovider.getAccountByUser(this.username).then(data => {
        this.account = data;
        if(this.account.password != this.curPassword){
          this.check = 1;
        } else {
          this.account.password = this.newPassword1;
          this.accountprovider.updateAccount(this.account, data.id).then(data => {
          });
          this.check = 2;
          this.clear();

        }
      });
    }

  }
        

  }

</script>

<style scoped lang="scss">
</style>

