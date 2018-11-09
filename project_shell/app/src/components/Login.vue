<template>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class Login extends Vue{
	@Prop() private msg!: string;
}
</script>
<style lang ="scss">
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