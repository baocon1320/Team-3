<template>
  <div class="application--wrap bgcolor">
      <div class = "left_display v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open theme--light">
        <ManagerBar></ManagerBar>
      </div>
      <div class = "right_display">
        
        <PageNumber v-bind:total_count="total_count" 
                    v-on:changePage="switchPage($event)">
        </PageNumber>        
      </div>       
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ManagerBar from '@/components/ManagerBar.vue'
import { AuthModel } from '@/models/auth';
import { AuthProvider } from '@/providers/auth';



@Component({
  components: {
    ManagerBar
  },
})
export default class LoginView extends Vue {
  check: string = '';
  token: AuthModel = new AuthModel('','',0);
  authprovider: AuthProvider = new AuthProvider();
   submit() {
    this.authprovider.getTokenByAccountId(15).then(data => {
        if(data != null){
          this.check = data.token;
        }
   });
  }
        

  }

</script>

<style scoped lang="scss">
.bgcolor {
  background-color: #f7f7f7;
}
.left_display {
  height: 100%;
  margin-top: 120px;
  max-height: calc(100% - 0px);
  transform: translateX(0px);
  width: 300px;  
  background-color: #f7f7f7;

}

.result_list {
  margin: 0 0 0 4px;
  padding: 0;
  word-spacing: -4px;
  letter-spacing: -4px;
  line-height: 1.25;
}
.list_item_display  {
  margin-top: 20px;
  padding: 0 0 0 80px;
  text-align: initial;
  margin-bottom: 50px;
}
.item_redirect {
  font-family: fantasy, sans-serif;
  background-color: #f7f7f7;
  line-height: 48px;
  height: 50px;
  display: table;
  width: 100%;
  padding: 0 0 0 80px;
  box-sizing: border-box;
  text-align: initial;
  margin-bottom: -28px;

}
.right_display {
  padding: 10px 192px 0px 300px;
  height: 1100px;
}

.main_store {
  margin-top: 25px;
}

</style>

