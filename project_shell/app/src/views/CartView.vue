<template>
  <div class = "main_cart">

    <div class = "cart_view">
      <div class = "cart_summary">
        <div class = "cate_header display-1 " > Cart summary </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <div class = "list_item_display">
          <ul class  = "result_list">
           <CartItem v-for="item in cartItems" v-bind:item="item" v-bind:cartItems="cartItems" v-bind:subtotal="subtotal"/>
          </ul>
        </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
      </div>
      <div class = "oder_summary">
        <div class = "cate_header display-1"> Order Summary </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <OrderSummary v-bind:cartItems="cartItems"/>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <v-btn color="orange" dark class="button_checkout" @click="checkout()">
          CHECKOUT
          <!-- <router-link to="/checkout" @click="updateItemOrders()">CHECKOUT</router-link> -->
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CartItem from '@/components/CartItem.vue'; // @ is an alias to /src
import OrderSummary from '@/components/OrderSummary.vue';
import { ItemOrderFKModel, ItemModel } from '@/models';
import { ItemOrderProvider, ItemProvider } from '@/providers';
@Component({
  components: {
    CartItem,
    OrderSummary
  },
})
export default class CartView extends Vue {

  itemOrderProvider: ItemOrderProvider =  new ItemOrderProvider();
  itemProvider: ItemProvider = new ItemProvider();

  item_ids: number [] = [];
  cartItems: any[] =[];
  quantList: number[] = [];
  subtotal: number = 0;


  async mounted(){
    this.item_ids = await this.itemProvider.getItemsByOrderId(0);
    this.item_ids.sort();
    let j:number = 0;
    for(let i:number = 0; i < this.item_ids.length; i++){
      let id = this.item_ids[i] + ""; //turns id of the item into a string;
      let item: any = await this.itemProvider.getItemById(id);
      item.index = i;
      await this.itemOrderProvider.getItemOrderFKByItemandOrderId(item.id, 0).then((itemOrders) => {
        item.quantity = itemOrders[0].quantity;
        this.cartItems.push(item);
      });
    }
  }

  checkout() {
    // Go through each of the item_ids and 
    // then update each itemOrder that has a cartItem
    // finally delete all of the itemOrders that have quantities = 0
    this.updateItemOrders();
  }

  async updateItemOrders(){
    for(let i: number= 0 ; i < this.cartItems.length; i++){
      await this.itemOrderProvider.getItemOrderFKByItemandOrderId(this.cartItems[i].id, 0).then((itemOrders) => {
        itemOrders[0].quantity = this.cartItems[i].quantity;
        this.itemOrderProvider.updateItemOrderFK(itemOrders[0].id, itemOrders[0]);
        this.$router.push('checkout');
      });
    } 
  }
}
  
</script>

<style scoped lang="scss">
.button_checkout {
  width: 380px;
  height: 50px;
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
}
.main_cart {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  background: transparent;
  max-height: 999999px;
  margin-top: 70px;
}
.oder_summary {
  bottom: auto;
  float: right;
  background: #fff;
  padding: 4px;
  width: 400px;
  font-size: 13px;
  font-weight: bold;
  padding-right: 30px;
}
.cart_view {
  position: relative;
  max-height: 999999px;
}
.cart_summary {
  bottom: auto;
  float: left;
  background: #fff;
  padding: 4px;
  width: 650px;
  font-size: 13px;
  padding-left: 30px;
  font-weight: bold;
  margin-top: -2px;
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
}
</style>
