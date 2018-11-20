<template>
  <div class = "main_store">
    
    <div class = "right_display">
      <div class = "item_redirect">
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
import CategoryBar from '@/components/CategoryBar.vue'; // @ is an alias to /src
import { ItemModel } from '@/models'
import { CategoryModel } from '@/models'
import { ItemProvider } from '@/providers'
import { CategoryProvider } from '@/providers'

@Component({
  components: {
    ItemDetail,
    CategoryBar
  },
})
export default class ItemView extends Vue {
  @Prop() item_id!: string;
  item: ItemModel = new ItemModel('', 0, 0, '',0,0,'');
  itemprovider : ItemProvider = new ItemProvider();
  curCategory: CategoryModel = new CategoryModel("");
  categoryprovider: CategoryProvider = new CategoryProvider();

  created() {   
        this.itemprovider.getItemById(this.item_id).then(data => {
          this.item = data;
        });

        

    }
  updated() {   
        if(this.item.category_id != 0){
          this.categoryprovider.getCategoryById(this.item.category_id.toString()).then(data => {
            this.curCategory = data;
          })
        }

    }
  
}
</script>

<style scoped lang="scss">


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
  margin-top: 25px;
}

</style>
