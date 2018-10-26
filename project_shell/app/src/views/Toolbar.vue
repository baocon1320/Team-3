<template>
  <div class="home">
   	<ToolbarComp  msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToolbarComp from '@/components/ToolbarComp.vue'; // @ is an alias to /src

@Component({
  components: {
  ToolbarComp,
  },
  })
  export default class Toolbar extends Vue {}
</script>