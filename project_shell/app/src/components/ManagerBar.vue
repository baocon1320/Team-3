<template>
  <v-layout row>
    <v-flex xs11>
      <v-card>
        <v-toolbar  dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title>Manager</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list>
          <v-list-tile  
              @click=""
              href="/manage/changepassword"
            >
              <v-list-tile-content>
                <v-list-tile-title>Change Password</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile  
              @click=""
              href="/manage/general"
              v-if="permission === 1"
            >
              <v-list-tile-content>
                <v-list-tile-title>Main Page Manager</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile  
              @click=""
              href="/manage/account"
              v-if="permission === 1"
            >
              <v-list-tile-content>
                <v-list-tile-title>Account Manager</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile  
              @click=""
              href="/manage/item"

            >
              <v-list-tile-content>
                <v-list-tile-title>Item Manager</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
             <v-list-tile  
              @click=""
              href="/manage/order"
            >
              <v-list-tile-content>
                <v-list-tile-title>Order Manager</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ManagerBar extends Vue {
//@Prop() private msg!: string;
  permission: number = 0;
  mounted() {
    if(localStorage.getItem('user') != null){
        const userJson = localStorage.getItem('user');
        var user = userJson !== null ? JSON.parse(userJson) : null; 
        this.permission = user.permission;
      }

  }
 } 
</script>







