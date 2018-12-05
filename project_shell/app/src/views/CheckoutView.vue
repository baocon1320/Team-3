<template>
  <div class = "main_cart">
    <div class = "cart_view">
      <ShippingInfo v-bind:cartItems="cartItems"/>
      <div class = "oder_summary">
        <div class = "cate_header display-1"> Order Summary </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <OrderSummary v-bind:cartItems="cartItems"/>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <!-- <v-btn color="orange" dark class="button_checkout" @click="checkout()"> MAKE A PAYMENT </v-btn> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CartItem from '@/components/CartItem.vue'; // @ is an alias to /src
import OrderSummary from '@/components/OrderSummary.vue';
import ShippingInfo from '@/components/ShippingInfo.vue';
import { ItemOrderFKModel } from '@/models';
import { ItemOrderProvider } from '@/providers';

@Component({
  components: {
    CartItem,
    OrderSummary,
    ShippingInfo
  },
})
export default class CheckoutView extends Vue {
  cartItems: any[] = [];
  itemOrderProvider: ItemOrderProvider = new ItemOrderProvider();

  mounted(){
    this.itemOrderProvider.getItemOrderFKByOrderId(0).then((itemOrders) => {
      console.log(JSON.stringify(itemOrders));
      for(let i:number = 0; i <  itemOrders.length; i++){
        itemOrders[i].price = itemOrders[i].item_price;
      }
      this.cartItems = itemOrders;
    });
  }
}
</script>

<style scoped lang="scss">
.main_cart {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background: transparent;
  max-height: 999999px;
  height: 900px;
}
.oder_summary {
  bottom: auto;
  float: right;
  padding: 4px;
  width: 400px;
  font-size: 13px;
  font-weight: bold;
  padding-right: 30px;
}
.cart_view {
  position: relative;
  max-height: 999999px;
  margin-top: 70px;
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
.result_list {
  margin: 0 0 0 4px;
  padding: 0;
  /*line-height: 1.25; */
}
.list_item_display  {
  padding: 0 0 0 25px;
  text-align: initial;
  font-size: 16px;
}
</style>
