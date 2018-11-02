<template>
  <div class = "main_cart">

    <div class = "cart_view">
      <div class = "cart_summary">
        <div class = "cate_header"> Cart summary </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <div class = "list_item_display">
          <ul class  = "result_list">
            <CartItem/>
            <CartItem/>
          </ul>
        </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
      </div>
      <div class = "oder_summary">
        <div class = "cate_header"> Order Summary </div>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <OrderSummary/>
        <div class = "hori_line_"><span class = "hori_line"></span></div>
        <button class = "button_checkout" onclick="/checkout">
          <router-link to="/checkout">CHECKOUT</router-link></button>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CartItem from '@/components/CartItem.vue'; // @ is an alias to /src
import OrderSummary from '@/components/OrderSummary.vue';
@Component({
  components: {
    CartItem,
    OrderSummary
  },
})
export default class CartView extends Vue {}
</script>

<style scoped lang="scss">
.button_checkout {
  width: 380px;
  height: 50px;
  font-size: 25px;
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
