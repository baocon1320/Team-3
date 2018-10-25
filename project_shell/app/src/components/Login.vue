<template>
    <div class="container">
        <img id="image" src="../assets/bikeShop.jpg" alt="./assets/logo.png"></img>
        <div id="logInDiv">
            <form id="userInput">
                <div id="userName">Username:</div>
                <input id="userBox" type="text" name="userName"><br>
                <div id="password">Password:</div>
                <input id="passwordBox" type="text" name="password"><br>
            </form>
            <button id="trackingButton" type="button">Log In</button>
        </div>  
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class Login extends Vue{
	@Prop() private msg!: string;
}
</script>
<style lang ="scss">
    #image{
        float:left;
        border-color: black;
        left:10px;
        padding-top:15px;
        padding: 5px;
        width: 800px;
        height: 400px; 
    }
    #logInDiv{
        float:right;
        border-radius: 15px;
        border-color: black;
        background-color:#FFAB5D;
        width: 300px;
        height: 150px;
        padding-right: 50px;
        padding: 10px;
        margin-top: 10%
    }
    #trackingButton{
        margin:auto;
        border-radius: 5px;
        padding:10px;
    }
    
</style>