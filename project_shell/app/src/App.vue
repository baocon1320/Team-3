<template>
  <div id="app" class="main_color">
    <v-app id="inspire" class="max-nav" dark>
      <v-toolbar>
        <a href="/"><img class="logo" src='./assets/foxycleLogo.png'></img></a>
        <v-toolbar-title>Foxycle</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat href="/store/0" >Store</v-btn>
          <v-btn flat href="/services">Services</v-btn>
          <v-btn flat href="/manufacturer">Manufacturers</v-btn>
          <v-btn flat href="/tracking" >Tracking</v-btn>
          <v-btn flat href="/login" v-if="this.$store.getters.getUsername === ''">Login</v-btn>
          
          <!-- <v-btn flat v-if="this.$store.getters.getUsername !== ''" @click="logout">Logout</v-btn> -->
          <v-menu offset-y v-if="this.$store.getters.getUsername !== ''">
            <v-btn
            slot="activator"         
            id="non_shadow"  
            >
            Hello {{this.$store.getters.getUsername}} 
            <v-icon>keyboard_arrow_down</v-icon>
          </v-btn>

          <v-list>
            <v-list-tile
            href="/manage/changepassword"
            @click=""
            >
            <v-list-tile-title>MANAGE</v-list-tile-title>

          </v-list-tile>
          <v-list-tile

          @click="logout"
          >
          <v-list-tile-title>LOGOUT</v-list-tile-title>

        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn flat href="/cart"> 
      <v-icon  color="orange darken-2" >shopping_cart</v-icon>
    </v-btn>
  </v-toolbar-items>
</v-toolbar>
</v-app>
<router-view/>

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
export default class App extends Vue {

  // Get the userinfo from local storage
  mounted() {
    if(localStorage.getItem('user') != null){
      const userJson = localStorage.getItem('user');
      let user = userJson !== null ? JSON.parse(userJson) : null;       
      this.$store.dispatch("changeUsername", user.username);
    }
  }

  // Logout and change back to the login page
  logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
    this.$store.dispatch("changeUsername", '');
    this.$router.push('/login');
  }
}

</script>

<style lang="scss">
.max-nav {
  max-height: 50px
}
.main_color {
  background-color: #f7f7f7;
}

a:link { color:#fff; }


a {
  text-decoration: none; 
  color: #fff;
}
a:hover { 
  color: #949494;
}
.logo {
  height: 50px;
  width: 50px;
}
/*#app {
  font-family: 'Roboto';
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(https://www.fg-a.com/wallpapers/white-ebony-wood-2018.jpg);
  }*/
  #non_shadow{
    box-shadow: none;
  }
  .buttons{
    right:auto;
    color: grey;
    padding-top: 10%;
  }
  #title{
    position:center;
    font-style: italic;
    color: #3F4042;
    font-weight: bold;
    text-align:center;
    font-size:35pt;
    padding-top: 2%;
    padding-bottom: 2%;

  }
  #logo{
    float: left;
    position: absolute;
    border-color: black;
    top: 8px;
    left: 16px;
    padding: 10px;
    width: 100px;
    height: 100px;
  }
  #nav {
    padding: 30px;
    border-radius: 5px;
    a {
      font-weight: bold;
      // align-items: flex-start;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #bottom-text{
    margin-top: 15%;
  }
</style>
