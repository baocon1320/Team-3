<template>
  <li class = "item_display">
    <div class ="item_picture">
      <a href="item">
        <img src = "../assets/bicycle1.jpg"></img>
      </a>
    </div>
    <div class = "item_name">
      <a >  <h2> Mountain Bicycle for Kid</h2> </a>
      <h3> Trek Bicycle</h3>
      <h4 class = "price"> <b> Price: </b> $200 </h4>
      <div class = "cart_edit">
        <span> Quantity: </span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button> Remove </button>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CartItem extends Vue {
  @Prop() private msg!: string;
}

</script>

<style scoped lang="scss">
.cart_edit button {
  margin-left: 50px;
  font-size: 16px;
}
.cart_edit select {
  margin-left: 10px;
}
.cart_edit span {
  font-size: 16px;
}
.cart_edit {
  margin-top: -10px;
}
.moreDetail {
  color: blue;
}
.item_name h5 {
  line-height: 0.2;

}
.item_name h4 {
  line-height: 2.0;
  font-size: 16px;
}
.item_name h3 {
  font-size: 14px;
  margin-bottom: 5px;
  word-wrap: break-word;
}
.item_name h2 {
  font-size: 20px;
  text-transform: uppercase;
}
.item_name {
  display: inline-block;
  text-align: initial;
  position: relative;
  vertical-align: top;
  overflow: hidden;
  line-height: 0.1;

}
.item_picture {
  width : 200px;
  display: inline-block;
  text-align: initial;
}
.item_picture a img {
  vertical-align: top;
  width: 150px;
  height: 150px;
}
.item_display {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  word-spacing: normal;
  letter-spacing: normal;
  padding: 0;
  margin: 0;
  max-width: 1250px;
  position: relative;
}
</style>
