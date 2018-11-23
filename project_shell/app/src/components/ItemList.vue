<template>

  <li class = "item_display">
    <div class ="item_picture">
      <a v-bind:href="'../item/' + item.id">
        <img :src='require(`../assets/${item.image}`)'></img> 
      </a>
    </div>
    <div class = "item_name">
      <a v-bind:href="'../item/' + item.id">  <h2> {{ item.item_name }}</h2> </a>
      <h3> {{ manufacture.name }} </h3>
      <h4 class = "price"> <b> Price: </b> ${{item.price}} </h4>
      <h5> {{descrip}} ...
      </h5>
      <a v-bind:href="'../item/' + item.id"> <h5 class = "moreDetail">  more detail
      </h5></a>
    </div>
  </li>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemModel } from '@/models/';
import { ManufacturerModel } from '@/models';
import { ManufacturerProvider } from '@/providers';

@Component
export default class ItemList extends Vue {
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
.moreDetail {
  color: blue;
}
.item_name h5 {
      

}
.item_name h4 {
  line-height: 2.0;
  font-size: 18px;
  margin-bottom: 20px;
}
.item_name h3 {
  font-size: 14px;
  margin-bottom: 5px;
  word-wrap: break-word;
  color: #949494;
}
.item_name h2 {
  font-size: 20px;
  text-transform: uppercase;
}
.item_name {
  display: inline-block;
  text-align: initial;
  position: relative;
  top: 30px;
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
  width: 180px;
  height: 180px;
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
