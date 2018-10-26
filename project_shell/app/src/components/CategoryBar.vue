<template>
<div class = "left_nav">
  <div class = "cate_header"> Category </div>
  <div class = "hori_line_"><span class = "hori_line"></span></div>
  <div class = "cate_list">
    <div class = "cate_item"><a> Mountain Bike </a> </div>
    <div class = "cate_item"><a> Children Bike </a> </div>
    <div class = "cate_item"><a> Road Bike </a> </div>
    <div class = "cate_item"><a>  Components  </a> </div>
  </div>
  <div class = "hori_line_"><span class = "hori_line"></span></div>
  <div class = "cate_header"> Filter </div>
  <div class = "hori_line_"><span class = "hori_line"></span></div>
  <div class = "price_filter">
    <div class = "Filter_head"><a>  BY Price  </a> </div>
    <div class = "price_range">
      <ul >
        <li>
          <a class = "filter_item">
            <input type="checkbox"> Under $100<br>
          </a>
        </li>
        <li>
          <a class = "filter_item">
            <input type="checkbox"> $100 - $200<br>
          </a>
        </li>
        <li>
          <a class = "filter_item">
            <input type="checkbox"> Over $200<br>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class = "price_filter">
    <div class = "Filter_head"><a>  BY Manufacturer  </a> </div>
    <div class = "price_range">
      <ul >
        <li>
          <a class = "filter_item">
            <input type="checkbox"> Trek Bicycle<br>
          </a>
        </li>
        <li>
          <a class = "filter_item">
            <input type="checkbox"> Giant Bicycle<br>
          </a>
        </li>
        <li>
          <a class = "filter_item">
            <input type="checkbox"> Scott Bicycle<br>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CategoryBar extends Vue {
  @Prop() private msg!: string;
}

</script>

<style scoped lang="scss">

.left_nav {
  bottom: auto;
  position: absolute;
  background: #fff;
  left: 9px;
  padding: 4px;
  width: 216px;
  z-index: 9;
  font-size: 13px;
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
.cate_list {

}
.cate_item {
  height :50px;
  background-color: #fff;
  color: #000;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 100%;
  overflow: hidden;
  text-transform: uppercase;
  border-left: 4px solid transparent;
  justify-content: center;
  padding: 0 35px 0 16px;
  text-align: left;
}
.cate_item a {
  font-size: 14px;
  line-height: 20px;

}
.Filter_head {
  height :20px;
  background-color: #fff;
  color: #000;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 100%;
  overflow: hidden;
  text-transform: uppercase;
  border-left: 4px solid transparent;
  justify-content: center;
  padding: 0 0 0 16px;
  text-align: left;
  font-size: 14px
}

.filter_item {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 0 0 0 16px;
  margin-left: 20px;
}
.filter_item input {

}
.filter_item label {

}
.price_range {
  display: block;
  height: auto;

}
.price_range ul {
  display: block;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
  line-height: 25px;
  text-align: initial;
}
</style>
