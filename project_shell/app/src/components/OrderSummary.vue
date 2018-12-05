<template>
  <div v-cloak class = "oder_summary_detail">
    <div class = "product_total">
      <div class = "name_field title"> Product Total: </div>
      <div class ="price_field title"> ${{this.cartItems.reduce(getSum,0)}}.00</div>
    </div>
    <div class = "product_total">
      <div class = "name_field title"> Estimated Tax Fee: </div>
      <div class ="price_field title"> ${{this.cartItems.reduce(getSum,0)*0.1}}.00</div>
    </div>
    <div class = "product_total">
      <div class = "sum_name headline"> Total: </div>
      <div class ="sum_price headline">${{this.cartItems.reduce(getSum,0)*0.1 + this.cartItems.reduce(getSum,0)}}.00</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class OrderSummary extends Vue {
    @Prop() private msg!: string;
    @Prop() cartItems!: any[];

    getSum(total: any, next: any){
      return total + (next.price*next.quantity);
    }

  }
</script>

<style scoped lang="scss">
.sum_name {
  float: left;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: bold;
}
.sum_price {
  float: right;
  font-size: 20px;
  font-weight: bold;
}
.price_field {
  float: right;
}
.name_field {
  float: left;
}
.product_total {
  display: inline-block;
  width: 380px;
  font-size: 16px;
  margin-bottom: 10px;
}

</style>
