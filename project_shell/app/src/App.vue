<template>

  <div id="app">
      <div id="title-section">
        <div id="title">Foxycle</div>
        <img id="logo" src="./assets/bike.jpg" alt="./assets/logo.png"></img>
        <button id="store" type="button">
            <router-link to="/store">Store</router-link>
        </button>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/services">Services</router-link> |
          <router-link to="/manufacturers">Manufacturers</router-link> |
          <router-link to="/tracking">Tracking</router-link> |
          <router-link to="/login">Login</router-link>
          <hr>
        </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#store{
    float: right;
    position: absolute;
    border-color: black;
    border-radius: 5px;
    text-decoration-color: black;
    font-size: 20pt;
    top: 50px;
    right: 100px;
    padding: 10px;
    width: 200;
    height: 100;
    a{
        color: #2c3e50;
        width: 200;
        height: 100;
        &.router-link-exact-active {
            color: #42b983;
        }
        
    }
}
#app {
  font-family: 'Roboto';
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#title-section{
    background-color: #FFAB5D;
    margin: 0%;
    padding: 0%;
}
#title{
    position:center;
    font-style: italic;
    text-align:center;
    font-size:35pt;
    padding-top: 2%;
        
}
#logo{
    float: left;
    position: absolute;
    border-color: black;
    top: 8px;
    left: 16px;
    padding: 10px;
    width: 100px;
    height: 60px;        
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
