<template>
  <div class="home">
    <div id="loginBox">
   	    <v-form id='form' v-model="valid">
            <v-text-field
            v-model= "Tracking"
            label="Tracking Number"
            required
            ></v-text-field>
        </v-form>
      <v-btn id="loginButton">
            Track!
        </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tracking from '@/components/Tracking.vue'; // @ is an alias to /src

@Component({
  components: {
  Tracking,
  },
  })
  export default class TrackingView extends Vue {}
</script>

<style lang='scss'>
    #loginBox{
        padding-top: 10%;
        height: auto;
        width: auto;
        border-color: black;
        text-align: center;
        height:700px;
        max-height: 100%;
        
    }
    #form{
        color: #41A4FF;
        display: inline-block;
    }
    #loginButton{
        display: table-column;
        object-position: center;
    }
    #logo{
        width: 100px;
        height: 100px;
        display: table-column;
    }
</style>

</style>