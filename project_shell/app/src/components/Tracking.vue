<template>
   <div id="container">
    <img id="image" src="../assets/bikeShop2.jpg" alt="./assets/logo.png"></img>
    <div class="trackBox">
        <form id="userInput">
            <div id="text">Tracking Number:</div><br>
            <input id="inputBox" type="text" name="trackingNumber"><br>
        </form>
        <button id="trackingButton" type="button">Enter</button>
    </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class Tracking extends Vue{
	@Prop() private msg!: string;
}
</script>
<style lang ="scss">
    .trackBox{
        float:right;
        margin-top: 10%;
        align-items: center;
        border-radius: 15px;
        border-color: black;
        background-color:#FFAB5D;
        width: 400px;
        height: 150px;
        padding-right: 50px;
        padding: 10px;
        margin-top: 10%
    }
    #image{
        float:left;
        border-color: black;
        left:10px;
        padding-top:15px;
        padding: 5px;
        width: 700px;
        height: 500px; 
    }
    #inputBox{
        width:150px;
    }
    #userInput{
        font-weight: 100;
        font-style: bold;
        text-align: center;
        padding:inherit;
    }
    #trackingButton{
        margin:auto;
        border-radius: 5px;
        padding:10px;
    }
    #text{
        padding:5px;
        font-style:bold;
    }
    
</style>