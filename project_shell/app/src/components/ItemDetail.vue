<template>
  <div class = "item_info">
    <div class = "item_display">
      <div class ="item_picture">
        <a>
          <img :src='require(`../assets/${item.image}`)'></img>
        </a>
      </div>
      <div class = "item_name">
        <h2 class="title font-weight-light orange--text mb-2"> {{ item.item_name }}</h2> 
        <h3 class="font-weight-light grey--text  mb-2"> {{ manufacture.name }}</h3>
        <h4 class = "price"> <b> Price: </b> ${{item.price}} </h4>
        <v-btn class="buttons" @click="addItemToCart()">
          Add to Cart
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
import { ItemModel } from '@/models';
import { ManufacturerModel, OrderModel, ItemOrderFKModel } from '@/models';
import { ManufacturerProvider, OrderProvider, ItemOrderProvider } from '@/providers';

@Component
export default class ItemDetail extends Vue {
  @Prop({ default: null })
  item!: ItemModel;
  descrip: string = this.item.description.substring(0, 70);
  manufacture: ManufacturerModel = new ManufacturerModel('', '', '');
  manufactureprovider: ManufacturerProvider = new ManufacturerProvider();
  quantity: number = 1;

  orderProvider: OrderProvider = new OrderProvider();
  itemOrderFKs: ItemOrderFKModel = new ItemOrderFKModel(0,0,0,0);
  itemOrderProvider: ItemOrderProvider = new ItemOrderProvider();



  mounted() {
    this.manufactureprovider.getManufacturerById(this.item.manufacturer_id).then(data => {
      this.manufacture = data;
    });
  }

  addItemToCart(){
    this.itemOrderProvider.getItemOrderFKByItemandOrderId(this.item.id, 0)
      .then((itemOrders) => {
        if(itemOrders.length == 0){
          //there are none of this item in the cart, create a itemOrderFK
          this.itemOrderFKs.item_id = this.item.id;
          this.itemOrderFKs.item_price = this.item.price;
          this.itemOrderFKs.quantity  = 1;
          this.itemOrderProvider.createItemOrderFK(this.itemOrderFKs);
        }else{
          //there is an instance of this item in the cart, update the itemOrderFK
          itemOrders[0].quantity += 1;
          itemOrders[0].item_price = this.item.price;
          this.itemOrderProvider.updateItemOrderFK(itemOrders[0].id, itemOrders[0]);
        }
    });
    // console.log("ItemOrder is: " + JSON.stringify(this.itemOrderFKs));
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
