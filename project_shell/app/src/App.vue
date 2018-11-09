<template>
  <div id="app">
        <div id="title">Foxycle</div>
        <img id="logo" src='./assets/foxycleLogo.png'></img>
        <v-btn class="buttons" >
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
            <router-link to="/store">Store</router-link>
        </v-btn>       
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Roboto';
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(https://www.fg-a.com/wallpapers/white-ebony-wood-2018.jpg);
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
