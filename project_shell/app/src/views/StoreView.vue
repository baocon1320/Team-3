<template>
  <!-- <div class = "main_store"> -->
    <div class="application--wrap bgcolor">
      <div class = "left_display v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open">
        <Refine v-on:categoryChange="reloadData($event)"
                v-on:filterChange="filterData(...arguments)" ></Refine>
      </div>
      <div class = "right_display">
        <div class = "item_redirect">
          <a> Store > </a>
          <a href="0"> All Bikes  > </a>
          <a v-if="cate_id != 0"
          > {{curCategory.name}}</a>
        </div>
        <v-container grid-list-xl text-xs-center>
          <v-layout row wrap>
        <ItemCart v-for="item in items" v-bind:key="item.id" v-bind:item="item"></ItemCart>
        <ItemCart/>
          </v-layout>
        </v-container>
        <PageNumber v-bind:total_count="total_count" 
                    v-on:changePage="switchPage($event)">
        </PageNumber>        
      </div>       
    </div>
  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ItemList from '@/components/ItemList.vue'; // @ is an alias to /src
import PageNumber from '@/components/PageNumber.vue';
import Refine from '@/components/Refine.vue'
import ItemCart from '@/components/ItemCart.vue'
import { ItemModel, CategoryModel} from '@/models'
import { ItemProvider, CategoryProvider } from '@/providers'

@Component({
  components: {
    ItemList,
    PageNumber,
    Refine,
    ItemCart,
  },
})
export default class StoreView extends Vue {
  @Prop() cate_id!: string;
  manu: number[] = [];
  check: number[] = [0, 0]
  allItems: ItemModel[] = []; // Array of all items
  cateItems: ItemModel[] = []; // Array of all items in specific category
  filteredItems: ItemModel[] = [];  // Array of items after filtering
  items: ItemModel[] = [];  // Array of items to display on a page of storeView (size = 9)
  total_count: number = 0;
  itemprovider : ItemProvider = new ItemProvider();
  curCategory: CategoryModel = new CategoryModel("");
  categoryprovider: CategoryProvider = new CategoryProvider();
  
  // This method to filter the items when user filtering items by price or manufacturer
  filterData(priceRange: number[], pickedManufacturers: number[]){
      this.check[0] = priceRange[0];
      this.check[1] = priceRange[1];
      this.manu = pickedManufacturers;
      if(pickedManufacturers.length == 0) {
        this.filteredItems = this.cateItems.filter(x => 
          (x.price >= priceRange[0] && x.price <= priceRange[1])) 
      } else {
        this.filteredItems = this.cateItems.filter(x => 
          ((x.price >= priceRange[0] && x.price <= priceRange[1]) && 
            (pickedManufacturers.includes(x.manufacturer_id))))
      }
      this.total_count = this.filteredItems.length;
      this.items = this.filteredItems.slice(0, 9);
  }


  // Loaditem base on category or all items
  reloadData(cur_cate_id: number) {   
    this.cateItems =  this.allItems.filter(x => x.category_id == cur_cate_id);
    this.cate_id = cur_cate_id.toString();
    this.categoryprovider.getCategoryById(this.cate_id).then(data => {
        this.curCategory = data;
      });
    this.total_count = this.cateItems.length;
    this.filteredItems = this.cateItems;
    this.items = this.filteredItems.slice(0, 9);
  }

  // When users want to change to another page
  switchPage(cur_page_num: number) {
    this.items = this.filteredItems.slice(9*(cur_page_num - 1), 9*cur_page_num);
  }

  // First load the items from server
  mounted() {
    this.itemprovider.getNumberofItem().then(data => {
      this.total_count = data;
    })
    
    this.itemprovider.getAllItems().then(data => {
      this.allItems = data;
      this.cateItems = this.allItems;
      this.filteredItems = this.cateItems;
      this.items = this.filteredItems.slice(0, 9);
    })

    if(this.cate_id != '0') {
      this.categoryprovider.getCategoryById(this.cate_id).then(data => {
        this.curCategory = data;
      });

      this.itemprovider.getItemsByCategory(this.cate_id).then(data => {
        this.cateItems = data;
        this.total_count = this.cateItems.length;
        this.filteredItems = this.cateItems;
        this.items = this.filteredItems.slice(0, 9);
      })

    } 
    
  }

  
}
</script>

<style scoped lang="scss">

</style>
