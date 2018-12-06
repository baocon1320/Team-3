<template>
  <v-layout row>
    <v-flex xs11>
      <v-card>
        <v-toolbar  dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>REFINE</v-toolbar-title>

          <v-spacer></v-spacer>

          
        </v-toolbar>

        <v-list>
          <v-list-group :value=true>
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>Category</v-list-tile-title>
              </v-list-tile-content>
              
            </v-list-tile>
            <v-list-tile
            v-for="category in categories"
            :key="category.name"
            @click="categoryChange(category.id)"
            >
            <v-list-tile-content>
              <v-list-tile-title>{{ category.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          
        </v-list-group>
        <v-list-group >
          <v-list-tile slot="activator" >
            <v-list-tile-content>
              <v-list-tile-title>Filter</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-subheader>By Price</v-subheader>
          <v-card-text>
            <v-range-slider
            v-model="priceRange"
            :max="2000"
            :min="0"
            type="number"                       
            thumb-label="always"
            @change="filterChange()"
            ></v-range-slider>
          </v-card-text>
          <v-subheader>By Manufacturers</v-subheader> 
          <v-checkbox v-for="manufacture in manufacturers" 
          :key="manufacture.id" 
          v-model="pickedManufaturers" 
          :label="manufacture.name" 
          :value="manufacture.id"
          @change="filterChange()">
          
        </v-checkbox>
      </v-list-group>
    </v-list>
  </v-card>
</v-flex>
</v-layout>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { CategoryModel } from '@/models';
  import { CategoryProvider, ManufacturerProvider } from '@/providers';
  import { ManufacturerModel } from '@/models';

  @Component
  export default class Refine extends Vue {
    check: number = 0;
    categories: CategoryModel[] = [];
    categoryprovider: CategoryProvider = new CategoryProvider();
    manufacturers: ManufacturerModel[] = [];
    manufacturerprovider: ManufacturerProvider = new ManufacturerProvider();
    priceRange: number[] = [0, 2000];
    pickedManufaturers: number[] = [];

    filterChange() {
      this.check += 1;
      this.$emit('filterChange',this.priceRange, this.pickedManufaturers)
    }

    categoryChange(cur_cate_id: number) {
      this.priceRange = [0, 2000];
      this.pickedManufaturers = [];
      this.$emit('categoryChange',cur_cate_id);
      
    }
    mounted() {
      this.categoryprovider.getAllCategories().then(data => {
        this.categories = data;
      });
      this.manufacturerprovider.getAllManufacturers().then(data => {
        this.manufacturers = data;
      })
    }
    // data () {
    //   return {
    //     items: [
    //       {
    //         title: 'Category',
    //         active: true,
    //         items: this.categories
    //       },
    //       {
    //         title: 'Filter',
    //         active: true,
    //         items: this.categories
    //       }
    
    
    //     ]
    //   }
    // }
  }
</script>