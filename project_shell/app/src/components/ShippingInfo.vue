<template>
  <div class = "cart_summary">
    <div class = "payment_info">
      <div class = "cate_header display-1"> Payment Information </div>
      <div class = "hori_line_"><span class = "hori_line"></span></div>
      <div class = "list_item_display">
        <v-form ref="form" v-model="valid" lazy-validation>
         <v-container grid-list-md class="main_color">
          <v-layout wrap>
            <v-flex xs6>
              <v-text-field
              v-model="cardNumber"
              :rules="[
              v => !!v || 'CardNumber is required'
              ]"
              label="Card Number"
              premade="credit-card"
              mask="#### - #### - #### - ####"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs4>
              <v-text-field
              v-model="expriredDate"
              :rules="[
              v => !!v || 'Expired Date is required'
              ]"
              mask="##/##"
              label="Expired Date"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-text-field
              v-model="cvv"
              :rules="[
              v => !!v || 'CVV is required',
              v => v.length == 3 || 'CVV must be 3 characters'
              ]" 
              label="CVV"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
              v-model="firstName"
              label="First Name"
              :rules="[
              v => !!v || 'First Name is required'
              ]"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
              v-model="lastName"
              :rules="[
              v => !!v || 'First Name is required'
              ]"
              label="Last Name"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
              v-model="email"
              :rules="[
              v => !!v || 'E-mail is required',
              v => /.+@.+/.test(v) || 'E-mail must be valid'
              ]"
              label="Email Address"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
              v-model="phoneNumber"
              :rules="[
              v => !!v || 'PhoneNumber is required'
              ]"
              label="PhoneNumber"
              mask="(###) ### - ####"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
              v-model="address"
              :rules="[
              v => !!v || 'Address is required'
              ]"
              label="Address"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
              v-model="city"
              :rules="[
              v => !!v || 'City is required'
              ]"
              label="City"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-text-field
              v-model="this.state"
              :rules="[
              v => !!v || 'State is required',
              v => v.length == 2 || 'Please uses two letters'
              ]"
              label="State"
              mask="AA"
              required
              ></v-text-field>
            </v-flex>
            <v-flex xs3>
              <v-text-field
              v-model="this.zipcode"
              :rules="[
              v => !!v || 'Zipcode is required',
              v => v.length == 5 || 'Please use your 5 or 9 digit zipcode.'
              ]"
              label="Zipcode"
              mask="#####"
              required
              ></v-text-field>
            </v-flex>
            <v-btn
            :disabled="!valid"
            @click="submit"
            color="orange" dark class="button_checkout"
            >
            MAKE A PAYMENT
          </v-btn>
         <!--  <v-btn @click="clear">clear</v-btn> -->
        </v-layout>
      </v-container>
    </v-form>
     <!--    <div class = "billing_input">
          <h3> Billing Address </h3>
          <a>
            <input type="checkbox"> Same as Shipping Address  <br>
          </a>
        </div> -->

       <!--  <div class = "info_input">
          <input class = "first_name" placeholder="First Name">
          <input class = "first_name" placeholder="Last Name">
        </div>
        <div class = "info_input">
          <input class = "address" placeholder="Address">
        </div>
        <div class = "info_input">
          <input class = "city" placeholder="City">
          <input class = "state" placeholder="State">
          <input class = "zipcode" placeholder="Zipcode">
        </div> -->

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class ShippingInfo extends Vue {
    @Prop() private msg!: string;
    cardNumber!:string;
    cVV!:string;
    firstName!:string;
    lastName!:string;
    emailAddress!:string;
    phoneNumber!:string;
    address!:string;
    city!:string;
    state!:string;
    zipcode!:string;

    cvvRules(cvv:string){
      if(cvv.length != 3){
        return "CVV must be three characters";
      }
    }

  }

</script>

<style scoped lang="scss">
.billing_input a {
  padding-left: 225px;
}
.billing_input h3 {
  display: inline-block;
}
.billing_input {
  margin-top: -15px;
  margin-bottom: 5px;
}
.payment_info {
  margin-top: 0px;
}
.zipcode {
  height: 25px;
  width: 146px;
  margin-right: 50px;
}
.state {
  height: 25px;
  width: 75px;
  margin-right: 50px;
}
.city {
  height: 25px;
  width: 220px;
  margin-right: 50px;
}
.address {
  height: 25px;
  width: 555px;
  margin-right: 50px;
}
.info_input {
  margin-bottom: 20px;
}
input {
  font-size: 16px;
}
input::-webkit-input-placeholder {
  font-size: 16px;
  padding-left: 10px;
}
.button_checkout {
  width: 380px;
  height: 50px;
  font-size: 25px;
  margin-left: 60%;
  margin-top: 10%;
  font-family: 'Roboto', sans-serif;
}
.first_name {
  height: 25px;
  width: 250px;
  margin-right: 50px;
}
.cart_summary {
  bottom: auto;
  float: left;
  padding: 4px;
  width: 650px;
  font-size: 13px;
  padding-left: 30px;
  font-weight: bold;
}
.cate_header {
  margin-bottom: 21px;
  font-size: 24px;
  line-height: 1;
  min-height: 23px;
  text-transform: uppercase;
}
.hori_line_ {
  padding: 0 0 35px 0;
}
.hori_line {
  background-color: #e5e5e5;
  border-color: #e5e5e5;
  color: #000;
  height: 1px;
  width: 100%;
  display: block;
}
</style>
