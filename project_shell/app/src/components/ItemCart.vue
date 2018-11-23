<template>
  <v-flex xs4>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <a v-bind:href="'../item/' + item.id">
      <v-img
        :aspect-ratio="16/9"
        :src='require(`../assets/${item.image}`)'
      >

        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 black--text"
            style="height: 30%;"
          >
            ${{item.price}}.00
          </div>
        </v-expand-transition>
      </v-img>
    </a>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
     <!--    <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn> -->
        <div class="font-weight-light grey--text  mb-2">{{ manufacture.name }} </div>
        <a v-bind:href="'../item/' + item.id">
          <h3 class="title font-weight-light orange--text mb-2">{{ item.item_name }}</h3>
        </a>
        <div class="font-weight-light mb-2">
          {{descrip}} ...
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
</v-flex>
</template>



<!-- <codepen-resources lang="json">
  {
    "css": ["https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"]
  }
</codepen-resources>  -->

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ItemModel } from '@/models/';
import { ManufacturerModel } from '@/models';
import { ManufacturerProvider } from '@/providers';

@Component
export default class ItemCart extends Vue {
  @Prop({ default: null })
  item!: ItemModel;
  descrip: string = this.item.description.substring(0, 30);
  manufacture: ManufacturerModel = new ManufacturerModel('', '', '');
  manufactureprovider: ManufacturerProvider = new ManufacturerProvider();

  mounted() {
    this.manufactureprovider.getManufacturerById(this.item.manufacturer_id).then(data => {
      this.manufacture = data;
    });
  }

}

</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>