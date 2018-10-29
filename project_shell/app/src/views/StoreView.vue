<template>
  <div class = "main_store">
    <CategoryBar/>
    <div class = "right_display">
      <div class = "item_redirect">
        <a> Store > </a>
        <a> All Bikes  > </a>
        <a> Mountain Bikes </a>
      </div>
      <div class = "list_item_display">
        <ul class  = "result_list">
          <ItemList/>
          <ItemList/>
          <ItemList/>

        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ItemList from '@/components/ItemList.vue'; // @ is an alias to /src
import CategoryBar from '@/components/CategoryBar.vue'; // @ is an alias to /src

@Component({
  components: {
    ItemList,
    CategoryBar
  },
})
export default class StoreView extends Vue {}
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
