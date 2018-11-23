<template>
  <div class = "item_info">
    <div class = "item_display">
      <div class ="item_picture">
        <a>
          <img :src='require(`../assets/${item.image}`)'></img>
        </a>
      </div>
      <div class = "item_name">
        <a >  <h2> {{ item.item_name }}</h2> </a>
        <h3> {{ manufacture.name }}</h3>
        <h4 class = "price"> <b> Price: </b> ${{item.price}} </h4>
        <v-btn class="buttons">
          <router-link to="/cart">Add to Cart</router-link>
        </v-btn>
        <h5 class = "moreDetail">  {{item.stock}} in stock
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
         {{item.description}}
        </span>

      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemModel } from '@/models/';
import { ManufacturerModel } from '@/models';
import { ManufacturerProvider } from '@/providers';

@Component
export default class ItemDetail extends Vue {
  @Prop({ default: null })
  item!: ItemModel;
  descrip: string = this.item.description.substring(0, 70);
  manufacture: ManufacturerModel = new ManufacturerModel('', '', '');
  manufactureprovider: ManufacturerProvider = new ManufacturerProvider();

  mounted() {
    this.manufactureprovider.getManufacturerById(this.item.manufacturer_id).then(data => {
      this.manufacture = data;
    });
  }

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
  margin-left: 10px;
}
.item_name h4 {
  line-height: 1.5;
  font-size: 16px;
  margin-left: 10px;
}
.item_name h3 {
  font-size: 14px;
  margin-bottom: 5px;
  word-wrap: break-word;
  margin-left: 10px;
}
.item_name h2 {
  font-size: 20px;
  text-transform: uppercase;
  margin-left: 10px;
}
.item_name {
  display: inline-block;
  text-align: initial;
  position: relative;
  top: 40px;
  vertical-align: top;
  overflow: hidden;

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
