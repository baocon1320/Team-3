<template>

    <li class = "item_display">
      <div class ="item_picture">
        <a >
          <img src = "../assets/bicycle1.jpg"></img>
        </a>
      </div>
      <div class = "item_name">
        <a >  <h2> Mountain Bicycle for Kid</h2> </a>
        <h3> Trek Bicycle</h3>
        <h4 class = "price"> <b> Price: </b> $200 </h4>
        <h5> This is bicycle for kid to run
          around with your family ...
        </h5>
        <a href="www.google.com"> <h5 class = "moreDetail">  more detail
        </h5></a>
      </div>
    </li>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemList extends Vue {
  @Prop() private msg!: string;
}

</script>

<style scoped lang="scss">
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
