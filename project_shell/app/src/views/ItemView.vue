<template>
  <div class = "main_store">
    <CategoryBar/>
    <div class = "right_display">
      <div class = "item_redirect">
        <a> Store > </a>
        <a> All Bikes  > </a>
        <a> Mountain Bikes > </a>
        <a> Mountain Bikes for Kids </a>
      </div>
      <ItemDetail/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ItemDetail from '@/components/ItemDetail.vue'; // @ is an alias to /src
import CategoryBar from '@/components/CategoryBar.vue'; // @ is an alias to /src

@Component({
  components: {
    ItemDetail,
    CategoryBar
  },
})
export default class ItemView extends Vue {}
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

}

</style>
