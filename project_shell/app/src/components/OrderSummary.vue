<template>
  <div class = "oder_summary_detail">
    <div class = "product_total">
      <div class = "name_field"> Product Total: </div>
      <div class ="price_field"> $300 </div>
    </div>
    <div class = "product_total">
      <div class = "name_field"> Estimated Shipping Fee: </div>
      <div class ="price_field"> $20 </div>
    </div>
    <div class = "product_total">
      <div class = "name_field"> Estimated Tax Fee: </div>
      <div class ="price_field"> $30 </div>
    </div>
    <div class = "product_total">
      <div class = "sum_name"> Total: </div>
      <div class ="sum_price"> $350 </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OrderSummary extends Vue {
  @Prop() private msg!: string;
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
