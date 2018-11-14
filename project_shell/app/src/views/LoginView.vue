<template>
  <div class="home">
      <img id='logo' src='../assets/foxycleLogo.png'></img>
    <div id="loginBox">
        <!--<img id='logo' src='../assets/foxycleLogo.png'></img>-->
   	    <v-form id='form' v-model="valid">
            <v-text-field
            v-model="UserName"
            label="UserName"
            required
            ></v-text-field>
            <v-text-field
            v-model="Password"
            label="Password"
            :type="'password'"
            required
            ></v-text-field>
        </v-form>
      </div>
      <v-btn id="loginButton" outline absolute>
            <router-link to="/admin">Log In</router-link>
        </v-btn>
      <v-btn id="signUp" outline absolute>
        <router-link to="/signup">Sign Up</router-link>
      </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from '@/components/Login.vue'; // @ is an alias to /src

@Component({
  components: {
  Login,
  },
  })
  export default class LoginView extends Vue {
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