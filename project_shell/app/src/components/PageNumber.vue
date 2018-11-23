<template>
  <div class="text-xs-center">
    <v-pagination
      v-model="page"
      :length="Math.ceil(page_num/9)"
      :total-visible="7"
      v-on:click="changePage"
    ></v-pagination>
    <h4> Page number is {{page_num}} and size is {{Math.ceil(page_num/9)}} 
    and current page is {{page}} and check {{check}}</h4>
  </div>

</template>

 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageNumber extends Vue {
  @Prop({ default: null })
  page_num!: number
  check: number = 0
  //size: number = this.page_num;
  data () {
      return {
        page: 1
      }
    }

  changePage() {
    this.check = 1;
  }


}
</script>
<style scoped lang="scss">
</style>