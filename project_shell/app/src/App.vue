<template>
  <div id="app" class="main_color">
       <!--  <div id="title">Foxycle</div>
        <img id="logo" src='./assets/foxycleLogo.png'></img> -->
  <v-app id="inspire" dark>
    <v-toolbar>
      <a href="/"><img class="logo" src='./assets/foxycleLogo.png'></img></a>
      <v-toolbar-title>Foxycle</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="/store/0" >Store</v-btn>
        <v-btn flat href="/services">Services</v-btn>
        <v-btn flat href="/manufacturers">Manufacturers</v-btn>
        <v-btn flat href="/tracking" >Tracking</v-btn>
        <v-btn flat href="/login" v-if="this.$store.getters.getUsername === ''">Login</v-btn>
        <v-btn flat href="/cart" v-if="this.$store.getters.getUsername === ''"> 
          <v-icon  color="orange darken-2" >shopping_cart</v-icon>
        </v-btn>
        <v-btn flat v-if="this.$store.getters.getUsername !== ''" @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
       <!--  <v-btn class="buttons" >
            <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn class="buttons">
            <router-link to="/services">Services</router-link>
        </v-btn>
        <v-btn class="buttons">
            <router-link to="/manufacturers">Manufacturers</router-link>
        </v-btn>
        <v-btn class="buttons">
            <router-link to="/tracking">Tracking</router-link>
        </v-btn>
        <v-btn class="buttons">
            <router-link to="/login">Login</router-link>
        </v-btn>
        <v-btn class="buttons">
            <router-link to="/store/0">Store</router-link>
        </v-btn>        -->
    <router-view/>
    <div><span>username is {{this.$store.getters.getUsername}}</span>
        
    </div>
    <div>
      <v-btn @click="loginn">loginn</v-btn>
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
    mounted() {
      if(localStorage.getItem('user') != null){
        const userJson = localStorage.getItem('user');
        let user = userJson !== null ? JSON.parse(userJson) : null;
       
        this.$store.dispatch("changeUsername", user.username);
        //this.$store.dispatch("changeUsername", 'ooo');
        //this.$router.push('services');
      }
    }

    logout(){
      localStorage.removeItem('user');
      localStorage.removeItem('jwt');
      this.$store.dispatch("changeUsername", '');
      
    }
  }

</script>

<style lang="scss">
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
