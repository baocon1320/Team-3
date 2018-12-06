<template>
  <li class = "item_display">
    <div class ="item_picture">
      <a href="item">
        <img src = "../assets/bicycle1.jpg"></img>
      </a>
    </div>
    <div class = "item_name">
      <h2  class="title font-weight-light orange--text mb-2">{{ item.item_name }}</h2>
      <h3 class="font-weight-light grey--text  mb-2">{{ this.manufacturer }}</h3>
      <h4 class = "price"> <b> Price: </b> {{item.price}} </h4>
      <div class = "cart_edit">
        <v-layout row wrap>
          <v-flex xs7>
            <v-select
            :items="quantityList(item.stock)"
            label="Quantity"
            class="font-weight-light grey--text"
            v-model="item.quantity"
            ></v-select>            
          </v-flex> 
          <v-flex xs4>
            <v-btn color="error" fab small dark @click="removeFromCart">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-flex> 
        </v-layout>     
      </div>
    </div>
  </li>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { ManufacturerProvider, ItemOrderProvider } from '@/providers';
  import CartView  from '@/views/CartView.vue';

  @Component
  export default class CartItem extends Vue {
    @Prop() private msg!: string;
    @Prop() subtotal!:number;
    @Prop() item!: any;
    @Prop() cartItems: any;
    @Prop() priceArray!: number[];


    manufacturer: string = "";
    manufacturerProvider: ManufacturerProvider = new ManufacturerProvider();

    itemOrderProvider: ItemOrderProvider = new ItemOrderProvider();

    cartView: CartView =  new CartView();

  // Create a list of number of an item user want to buy (usually from 1 to 6, if there is less than 6 in stock so from 1 to maxQuantity in stock)
  quantityList(maxItems: number) {
    var result = []
    maxItems = (maxItems < 6) ? maxItems : 6
    for(var i = 1; i <= maxItems; i++)
      result.push(i);
    return result;
  }

  mounted(){
    this.manufacturerProvider.getManufacturerById(this.item.manufacturer_id).then((data) => {
      this.manufacturer = data.name;
    });
  }

  // triggerred on clicking on the trash can button
  // removes the itemOrder from the DB
  // then find the index in the cartItems array the item is at
  // removes that index from the cartItems array
  removeFromCart(){
    this.itemOrderProvider.deleteByItemId(this.item.id);
    let deleteIndex: number = this.findIndexOf(this.item);
    if(deleteIndex != -1){
      this.cartItems.splice(deleteIndex, 1);
    }
  }

  //searches the cartItems array for a certain item that 
  //has the same name then returns the index in the cartItems array.
  findIndexOf(item: any){
    for(let i:number = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].item_name == item.item_name){
        return i;
      }
    }
    return -1;
  }

  changeQuantity(){
    console.log("We have changed the quantity");
  }
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
  margin-top: 10px;
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
  margin-bottom:  20px;
  max-width: 1250px;
  position: relative;
}
</style>
