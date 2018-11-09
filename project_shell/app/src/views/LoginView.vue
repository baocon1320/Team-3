<template>
  <div class="home">
    <div id="loginBox">
        <img id='logo' src='../assets/foxycleLogo.png'></img>
   	    <v-form id='form' v-model="valid">
            <v-text-field
            v-model="UserName"
            label="UserName"
            required
            ></v-text-field>
            <v-text-field
            v-model="Password"
            label="Password"
            required
            ></v-text-field>
        </v-form>
      <v-btn id="loginButton" outline absolute>
            Login
        </v-btn>
    </div>
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
        background-color: white;
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