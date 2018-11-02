<template>
  <div class = "item_info">
    <div class = "item_display">
      <div class ="item_picture">
        <a>
          <img src = "../assets/bicycle1.jpg"></img>
        </a>
      </div>
      <div class = "item_name">
        <a >  <h2> Mountain Bicycle for Kid</h2> </a>
        <h3> Trek Bicycle</h3>
        <h4 class = "price"> <b> Price: </b> $200 </h4>
        <button class= "add_cart">
          <router-link to="/cart">Add to Cart</router-link>
        </button>
        <h5 class = "moreDetail">  3 in stock
        </h5>
      </div>
    </div>
    <div class = "item_description">
      <div class = "item_title">
        <h1> ITEM DESCRIPTION </h1>
      </div>
      <div class = "hori_line_"><span class = "hori_line"></span></div>
      <div class = "item_specs">

        <span>
          When Trek built the Emonda S 4, they created an incredibly fast, fun machine. A bike that features a full carbon frame made from Trek's OCLV carbon, some of the best and lightest in the business. Light is one thing, but what really sets the Emonda apart is the ride. The specific carbon layup and the dialed geometry combine to give you that lively, yet stable feel that makes us get on our bikes in the first place. They didn't skimp on components either. A full 10-speed Shimano Tiagra gruppo and tubeless-ready Bontrager wheels grace the frame and blow the performance-to-value ratio out of the water.
        </span>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemList extends Vue {
  @Prop() private msg!: string;
}

</script>

<style scoped lang="scss">
a:link {
    text-decoration: none;
    color: white;
}
a:hover, a:active {
    color: red;
}
.item_specs {
  font-size: 14px;
  text-align: justify;
}
.item_description {
  letter-spacing: initial;
  word-spacing: initial;
}
.item_title {

  text-align: center;
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
.add_cart {
  margin-top: -15px;
  font-size: 18px;
}
.item_info {
  margin-top: 20px;
  padding: 0 0 0 80px;
  text-align: initial;
  margin: 0 0 0 4px;
  word-spacing: -4px;
  letter-spacing: -4px;
  line-height: 1.25;
}
.moreDetail {
  color: red;
}
.item_name h5 {
  line-height: 0.2;

}
.item_name h4 {
  line-height: 1.5;
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
  top: 40px;
  vertical-align: top;
  overflow: hidden;
  line-height: 0.1;

}
.item_picture {
  width : 300px;
  display: inline-block;
  text-align: initial;
}
.item_picture a img {
  vertical-align: top;
  width: 200px;
  height: 200px;
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
