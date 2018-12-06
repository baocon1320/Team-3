<template>
  <div class = "main_store">
    
    <div class = "right_display_item">
      <div class = "item_redirect_item">
        <a> Store > </a>
        <a href="/store/0"> All Bikes  > </a>
        <a v-bind:href="'/store/' + curCategory.id"> {{ curCategory.name }} > </a>
        <a> Mountain Bikes for Kids </a>
      </div>
      <ItemDetail v-bind:key="item.id" v-bind:item="item"></ItemDetail>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import ItemDetail from '@/components/ItemDetail.vue'; // @ is an alias to /src
import { ItemModel, CategoryModel } from '@/models'
import { ItemProvider, CategoryProvider } from '@/providers'

@Component({
  components: {
    ItemDetail,
  },
})
export default class ItemView extends Vue {
  @Prop() item_id!: string;
  item: ItemModel = new ItemModel('', 0, 0, '',0,0,'',0);
  itemprovider : ItemProvider = new ItemProvider();
  curCategory: CategoryModel = new CategoryModel("");
  categoryprovider: CategoryProvider = new CategoryProvider();

  // load the info of item
  mounted() {   
        this.itemprovider.getItemById(this.item_id).then(data => {
          this.item = data;
          this.categoryprovider.getCategoryById(this.item.category_id.toString()).then(data => {
            this.curCategory = data;
          })
        });
    }
  
}
</script>

<style scoped lang="scss">

</style>
