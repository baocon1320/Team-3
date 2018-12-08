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
              v-model="orderModel.creditCardNum"
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
              v-model="orderModel.email"
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
              v-model="orderModel.phoneNumber"
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
              v-model="state"
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
              v-model="zipcode"
              :rules="[
              v => !!v || 'Zipcode is required',
              v => v.length == 5 || 'Please use your 5 or 9 digit zipcode.'
              ]"
              label="Zipcode"
              mask="#####"
              required
              ></v-text-field>
            </v-flex>
            <div class="footer_section">
              <h3 class="invalid_heading" v-if="invalidSubmit">Fill out all of the form fields before making payment</h3>
            <v-btn
            @click="submit()"
            color="orange" dark class="button_checkout"
            >
            MAKE A PAYMENT
          </v-btn>
            </div>

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
  import { OrderProvider, ItemOrderProvider, ItemProvider } from '@/providers';
  import { OrderModel, AddressModel } from '@/models';

  @Component
  export default class ShippingInfo extends Vue {
    @Prop() private msg!: string;
    @Prop() cartItems!: any [];
    cardNumber!:string;
    expriredDate!:string;
    cvv!:string;
    firstName!:string;
    lastName!:string;
    emailAddress!:string;
    phoneNumber!:string;
    address!:string;
    city!:string;
    state!:string;
    zipcode!:string;

    /**
    customerName !: string;
    creditCardNum!:string;
    securityCode!:number;
    priceTotal!:number;
    email!:string;
    phoneNumber!:string;
    date!:any;
    status!:string;
    */
    orderModel: OrderModel = new OrderModel(0,"","",0,0,"","",new Date(), "unprocessed");
    /**
    streetOne!: string;
    streetTwo!:string;
    city!:string;
    state!:string;
    zipcode!:string;
    */
    addressModel: AddressModel = new AddressModel("","","","","");

    orderProvider: OrderProvider = new OrderProvider();
    itemOrderProvider: ItemOrderProvider =  new ItemOrderProvider();
    itemProvider: ItemProvider = new ItemProvider();


    invalidSubmit: boolean = false;

    submit(){
      if(this.isValid()){
        this.invalidSubmit = false;
        this.orderModel.customerName = this.firstName + ' ' + this.lastName;
        this.orderModel.securityCode = parseInt(this.cvv);
        this.orderModel.priceTotal = this.cartItems.reduce(this.getSum,0);
        this.orderModel.date.month = parseInt(this.expriredDate.substring(1,2));
        this.orderModel.date.year = 2000 + parseInt(this.expriredDate.substring(2));
        this.orderModel.status = "Processing";
        this.orderProvider.createOrder(this.orderModel).then((response) => {
          this.orderModel = response;
          this.itemOrderProvider.getItemOrderFKByOrderId(0).then((itemOrders) => {
            for(let i: number = 0 ; i < itemOrders.length; i++){

              itemOrders[i].order_id = this.orderModel.id;
              this.itemOrderProvider
                    .updateItemOrderFK(itemOrders[i].id, itemOrders[i]);
              this.itemProvider.getItemById(itemOrders[i].item_id + "").then((items) => {
                items.stock -= itemOrders[i].quantity;
                this.itemProvider.updateItem(items, items.id);
              });
            }
            this.$router.push({ name: 'confirmation', params: { order_id: this.orderModel.id }});
          });
        });
      }else{
        this.invalidSubmit = true;
      }
    }

    isValid(){
      return true;
    }

    getSum(total: any, next: any){
      return total + (next.price*next.quantity);
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
  font-family: 'Roboto', sans-serif;
}

.footer_section{
  margin-left: 60%;
  margin-top: 10%;
}

.invalid_heading{
  text-align: center;
  color: orange;
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
