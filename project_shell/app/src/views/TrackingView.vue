<template>
  <div class="home">
    <div id="loginBox">
      <v-form ref="form" v-model="valid" lazy-validation>
       <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm5>
            <v-text-field
            v-model="orderNumber"
            :rules="[v => !!v || 'Order Number is required']"
            type="Number"
            label="Order Number"
            required
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm7>
            <v-text-field
            v-model="email"
            :rules="[v => !!v || 'Email is required']"
            label="Email"
            required
            ></v-text-field>
          </v-flex>
          <v-btn
          :disabled="!valid"
          @click="submit"
          >
          Tracking!
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-layout>
    </v-container>
  </v-form>
  <div v-if="check == 1" class="v-messages theme--light error--text subheading font-weight-bold error-center title">
   Order number or email is not correct, please check your email confirmination again or contact our support
</div>
<div v-if="check == 2" class="v-messages theme--light green--text subheading font-weight-bold error-center title">
  <span v-if="status == 'Cancel'">This Order has been cancel, please contact our support if you have any concern</span>
  <span v-if="status == 'Processing'">This Order is  currently  processing, please check this back or waiting for our email</span>
  <span v-if="status == 'Ready'">This Order is  ready to pick up, plese bring your email of confirmation or your id when you come to pick up</span>
  <span v-if="status == 'Picked up'">This Order was picked up, please contact our support if you have any concern</span>
</div>
</div>

</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tracking from '@/components/Tracking.vue'; // @ is an alias to /src
import {  OrderModel } from '@/models';
  import { OrderProvider } from '@/providers';
@Component({
  components: {
    Tracking,
  },
})
export default class TrackingView extends Vue {
  valid: boolean = true;
  check: number = 0;
  orderNumber: number = 0;
  status='';
  email:  string = '';
  order: OrderModel = new OrderModel(0, '', '', 0, 0, '', '', '', '');
  orderprovider: OrderProvider = new OrderProvider();

  // clear the form
  clear () {
    (this.$refs.form as any).reset();
    this.check = 0;
  }

  // Tracking the order and send back the status
  submit() {
    if ((this.$refs.form as any).validate()) {
      this.orderprovider.getOrderByEmailAndId(this.orderNumber, this.email).then((data) => {
          if(data == null){
            this.check = 1;
          }
          else{
            this.check = 2;
            this.status = data.status;
            this.order = data;
          }
      });

    }
  }
}
</script>

<style lang='scss'>
#loginBox{
  padding-top: 30px;
  height: auto;
  width: auto;
  border-color: black;
  text-align: center;
  height:700px;
  max-height: 100%;
  width: 600px;
  margin: auto;

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