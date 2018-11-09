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
      <button id="loginButton" outline absolute v-on:click="loginButtonPress">
            Login
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AccountProvider } from '@/providers'; // imports the account provider for logins
import Login from '@/components/Login.vue'; // @ is an alias to /src


@Component({
  components: {
  Login,
  },
  })
export default class LoginView extends Vue {
    userName: string = '';
    password: string = '';
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
