<template>
  <div class="text-xs-center">
    <v-pagination
      v-model="current_page"
      :length="Math.ceil(total_count/9)"
      :total-visible="7"
      @input="changePage(current_page)"
    ></v-pagination>
    <!-- <h4> Total items is {{total_count}} and number of page is {{Math.ceil(total_count/9)}} 
    and current page is {{current_page}} and check {{check}}</h4> -->
  </div>

</template>

 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageNumber extends Vue {
  @Prop({ default: null })
  total_count!: number
  check: number = 0
  current_page: number = 1;

  changePage(cur_page_num: number) {
    this.$emit('changePage', cur_page_num);
    this.check = 1;
  }


}
</script>
<style scoped lang="scss">
</style>