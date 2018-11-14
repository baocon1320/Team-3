<template>
  <div class="box">
    <v-form id='form' v-model="valid">
            <v-text-field
            v-model="UserName"
            label="UserName"
            required
            ></v-text-field>
            <v-text-field
            v-model="Password"
            label= "Password"
            :type="'password'"
            required
            ></v-text-field>
            <v-text-field
            v-model="Address"
            label="Address"
            required
            ></v-text-field>
            <v-text-field
            v-model="City"
            label="City"
            required
            ></v-text-field>
            <v-text-field
            v-model="State"
            label="State"
            required
            ></v-text-field>
            <v-text-field
            v-model="ZipCode"
            label="ZipCode"
            required
            ></v-text-field>
    </v-form>
    <v-btn>
        Enter
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SignUp from '@/components/SignUp.vue'; // @ is an alias to /src

@Component({
  components: {
  SignUp,
  },
  })
  export default class SignUpView extends Vue {}
</script>
<style lang='scss'>
    #home{
        width: 300;
        height: auto;
        text-align: center;
        position: absolute;
        
    }
    #box{
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
</style>