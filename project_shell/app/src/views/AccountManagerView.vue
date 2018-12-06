<template>
  <div class="application--wrap bgcolor">
    <div class = "left_display v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open">
      <ManagerBar></ManagerBar>
    </div>
    <div class = "right_display">
      <div class = "item_redirect">
        <div class="subheading blue--text"> Account Manager > </div>
      </div>
      <div class="table_display">
        <div id="app">
          <v-app id="inspire">
            <v-card >
              <v-card-title >
                Accounts Detail
                <v-spacer></v-spacer>
                <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <v-btn slot="activator"  
                  fab small dark
                  @click="setUserInfo(0,'', '')">
                  <v-icon>add</v-icon>
                </v-btn>                
              </v-dialog>
            </v-card-title>

            <v-data-table
            :headers="headers"
            :items="accounts"
            :search="search"
            >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.username }}</td>
              <td>{{ props.item.password }}</td>
              <td>{{ role[props.item.permission] }}</td>
              <td>
                <v-btn v-if="props.item.permission !== 1" 
                fab small dark 
                @click="deleteAccount(props.item.id)"
                >
                <v-icon>delete</v-icon>
              </v-btn>
              <v-dialog v-model="dialog" persistent max-width="600px">

                <v-btn slot="activator" v-if="props.item.permission !== 1"  
                fab small dark
                @click="setUserInfo(props.item.id,props.item.username, props.item.password)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-card>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card-title>
                    <span class="headline">User Modification</span>
                  </v-card-title>
                  <v-card-text>

                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Username*" :rules="[v => !!v || 'UserName is required']"
                            v-model="username" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Password*" :rules="[v => !!v || 'Password is required']"
                              v-model="password" required></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>*indicates required field</small>
                        <div v-if="check == 1" class="v-messages theme--light error--text subheading font-weight-light error-center"> Username already exists </div>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="check = 0; dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat :disabled="!valid" @click="updateAccount()">Save</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>


              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-app>
    </div> 
  </div>   
  
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
  export default class GeneralManagerView extends Vue {
    check: number = 0;
    valid: boolean = true;
    dialog: boolean = false;
    username: string = '';
    password: string = '';
    id: number = 0;
    search = '';
    role = ['', 'owner', 'employee'];
    account: AccountModel = new AccountModel('','',0);
    accounts: AccountModel[] = [];
    accountprovider: AccountProvider = new AccountProvider();
    headers = [
    {
      text: 'Username',
      align: 'left',
      sortable: true,
      value: 'username'
    },
    { text: 'Password', value: 'password', align: 'left' },
    { text: 'Permission', value: 'permission', align: 'left', sortable: true, },
    { text: 'modification', value: 'modification'}
    ];

    // Fetch all the account data
    mounted(){
      this.accountprovider.getAllAccounts().then(data => {
        this.accounts = data;

      })
    }

  // Only change password and username can't modify and permission
  // Update an account
  updateAccount(){
    if ((this.$refs.form as any).validate()) {
      this.accountprovider.getAccountByUser(this.username).then(data => { 
        if(data == null || data.id == this.id){
          this.account.username = this.username;
          this.account.password = this.password;
          if(this.id == 0){
            this.account.permission = 2;
            this.accountprovider.createAccount(this.account).then(data_ => {
              this.accountprovider.getAllAccounts().then(data_new => {
                  this.accounts = data_new;
                  this.check = 0;
                  this.dialog = false;
                });
            })
          }else{
            this.accountprovider.getAccountById(this.id).then(data => {
              this.account.permission = data.permission;              
              this.accountprovider.updateAccount(this.account, this.id).then(data1 => {
                this.accountprovider.getAllAccounts().then(data_new => {
                  this.accounts = data_new;
                  this.check = 0;
                  this.dialog = false;
                });
              });
            });
          }
        }else{
          this.check = 1;
        }
      });
      }
    }

    // Delete an account
    deleteAccount(id: number){
      this.accountprovider.deleteAccount(id).then(data => {
        this.accountprovider.getAllAccounts().then(data_new => {
          this.accounts = data_new;
        })
      });
    }

    // Show the info of specific account
    setUserInfo(id: number, username: string, password: string){
      this.username = username;
      this.password = password;
      this.id = id;
    }

  }


</script>

<style scoped lang="scss">
.table_display {
  background-color: #f7f7f7;
  margin: auto;
  padding-top: 25px;
}
</style>

