 <template>
  <div id='background'>
  <v-container id='container'>
  <v-layout row wrap>
          <v-carousel id="carousel"
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
         hide-delimiters>
             <v-carousel-item v-for="(items,i) in items" :key="i" :src="items.src">
             </v-carousel-item>
         </v-carousel>
   </v-layout>
    <!--<div class='AboutBar'>
     <div id='about'>About Us</div>
     <div id='hours'>Store Hours</div>
    <div id='annoucements'>Annoucements</div>
     </div>-->
   </v-container>
   <div class='bottomInfo'>
    <div id='aboutClassLeft'>
   <v-card class= 'text-lg-left'>
       <v-card-title class ='cardTitle'>About Us</v-card-title>
       <hr>
       <v-card-text var='aboutUs'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
   </v-card>
       </div>
       <div id='classCenter'>
      <v-card class='text-lg-center' >
       <v-card-title class='cardTitle'>Store Hours</v-card-title>
       <hr>
       <v-card-text var='storeHours'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
     </v-card>
     </div>
       <div id='classRight'>
      <v-card class='text-lg-right'>
       <v-card-title class='cardTitle'>Annoucements</v-card-title>
       <hr>
       <v-card-text var='annoucements'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
     </v-card>
     </div>
     </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
@Component({
    components: {
    HelloWorld,
  },
 })
 export default class Home extends Vue{
    data () {
       return {
        items: [
          {
            src: 'https://i.pinimg.com/originals/c3/5e/f8/c35ef8153cd7a0ef45cfa85042556109.jpg',
          },
          {
             src: 'https://i.pinimg.com/originals/10/d9/c5/10d9c5896cd3c653946ca2d18f21dc64.jpg',
           },
           {
             src: 'https://wallpapercave.com/wp/wp2747587.jpg',
},
         ],
       };
     }
}
</script>

<style lang='scss'>
    #container{
        width: inherit;
        height: inherit;
        text-align: center;
        padding-top: 5%;
    }
    #carousel{
        max: 600;
        height: auto;
    }
    .bottomInfo{
        position: absolute;
        font-weight: bold;
        padding-right: 5%;
        padding-left: 5%;
        padding-bottom: 5%;
        padding-top: 2%;
        color: white;
        align-items: center;
        text-align: left;
        align-content: center;
    }
    .card{
        width: 100;
        height: 200;
        padding: 2%;
        display: inline-block;
    }
    .cardTitle{
        font-weight: bold;
        font-size: 16pt;
    }

</style>
