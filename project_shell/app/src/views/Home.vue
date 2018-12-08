 <template>
  <div id='background'>
  <v-container class="main_page_width" id='container'>
  <v-layout row wrap>
          <v-carousel id="carousel"
          prev-icon="mdi-arrow-left"
          next-icon="mdi-arrow-right"
         hide-delimiters>
             <v-carousel-item v-for="(items,i) in items" :key="i" :src="items.src">
             </v-carousel-item>
         </v-carousel>
   </v-layout>
   </v-container>
   <div class='bottomInfo'>
    <div id='aboutClassLeft'>
   <v-card class= 'text-lg-left'>
       <v-card-title class ='cardTitle'>About Us</v-card-title>
       <hr>
       <v-card-text var='aboutUs'> {{ general.storeDescription }}</v-card-text>
   </v-card>
       </div>
       <div id='classCenter'>
      <v-card class='text-lg-center' >
       <v-card-title class='cardTitle'>Store Hours</v-card-title>
       <hr>
       <v-card-text  var='storeHours'>{{ general.storeHours }}</v-card-text>
     </v-card>
     </div>
       <div id='classRight'>
      <v-card class='text-lg-right'>
       <v-card-title class='cardTitle'>Annoucements</v-card-title>
       <hr>
       <v-card-text var='annoucements'>{{ general.textBody}}</v-card-text>
     </v-card>
     </div>
     </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { GeneralProvider, AccountProvider } from '@/providers';
import { GeneralModel, AccountModel } from '@/models';
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
     
     general: GeneralModel = new GeneralModel('', '', '', '');
     generalprovider: GeneralProvider = new GeneralProvider();

     accountProvider: AccountProvider = new AccountProvider();
    
    // Get the main page info
    mounted() {
      this.generalprovider.getGeneralById(1).then(data => {
        if(data == null)
        {
          this.generalprovider.createGeneral(this.general).then((newdata) => {
            this.general = data;
          })
        }
        else{
        this.general = data;
      }
      });   

      this.accountProvider.getAccountByAdmin().then((data) => {
        if(data.length == 0 ){
          let adminAccount = new AccountModel("admin", "password", 1);
          this.accountProvider.createAccount(adminAccount);
        }
      });  
    }
}
</script>

<style lang='scss'>

    #container{
        width: inherit;
        height: inherit;
        text-align: center;
        padding-top: 5%;
        max-width: 1344px;
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
        background: #f7f7f7;
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
