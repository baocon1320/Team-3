<template>
  <div class="home">
   	<Tracking  msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tracking from '@/components/Tracking.vue'; // @ is an alias to /src

@Component({
  components: {
  Tracking,
  },
  })
  export default class TrackingView extends Vue {}
</script>