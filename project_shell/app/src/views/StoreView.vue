<template>
  <div class = "main_store">
     
    <CategoryBar/>
    <div class = "right_display">
      <div class = "item_redirect">
        <a> Store > </a>
        <a href="0"> All Bikes  > </a>
        <a v-if="cate_id != 0"
        > {{curCategory.name}}</a>
      </div>
      <div>
        <h1> {{curCategory.name}}</h1>
      </div>
      <div class = "list_item_display">
        <ul class  = "result_list">
          <ItemList v-for="item in items" v-bind:key="item.id" v-bind:item="item"></ItemList>

        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ItemList from '@/components/ItemList.vue'; // @ is an alias to /src
import CategoryBar from '@/components/CategoryBar.vue'; // @ is an alias to /src
import { ItemModel } from '@/models'
import { CategoryModel } from '@/models'
import { ItemProvider } from '@/providers'
import { CategoryProvider } from '@/providers'

@Component({
  components: {
    ItemList,
    CategoryBar
  },
})
export default class StoreView extends Vue {
  @Prop() cate_id!: string;
  items : ItemModel[] = [];
  itemprovider : ItemProvider = new ItemProvider();
  curCategory: CategoryModel = new CategoryModel("");
  categoryprovider: CategoryProvider = new CategoryProvider();

  mounted() {
      if(this.cate_id == '0') {
        this.itemprovider.getAllItems().then(data => {
          this.items = data;
        })
      } else {
        this.categoryprovider.getCategoryById(this.cate_id).then(data => {
          this.curCategory = data;
        });
        this.itemprovider.getItemsByCategory(this.cate_id).then(data => {
          this.items = data;
        })
      }

    }
}
</script>

<style scoped lang="scss">

.result_list {
  margin: 0 0 0 4px;
  padding: 0;
  word-spacing: -4px;
  letter-spacing: -4px;
  line-height: 1.25;
}
.list_item_display  {
  margin-top: 20px;
  padding: 0 0 0 80px;
  text-align: initial;
}
.item_redirect {
  font-family: fantasy, sans-serif;
  background-color: #fff;
  line-height: 48px;
  height: 50px;
  display: table;
  width: 100%;
  padding: 0 0 0 80px;
  box-sizing: border-box;
  text-align: initial;

}
.right_display {
  min-width: 482px;
  margin-bottom: 50px;
  margin-left: 299;
  bottom: auto;
  position: absolute;
  background: #fff;
  left: 230px;
  padding: 0 100px 0 0;
  z-index: 9;
  font-size: 13px;
  width: 1000px;
}

.main_store {

}

</style>
