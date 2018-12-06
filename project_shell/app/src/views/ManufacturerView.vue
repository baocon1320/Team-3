<template>
  <div class="container">
   	<v-container v-for="manufacturer in manufacturers" :key="manufacturer.id">
        <v-card>
        <v-img class="manu_image" :src='require(`../assets/${manufacturer.image}`)'></v-img>
        <v-card-title>
        <div>
        <h3>{{manufacturer.name}}</h3>
        </div>
        </v-card-title>
        <v-card-text>
        {{manufacturer.description}}
        </v-card-text>
        </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Manufacturer from '@/components/Manufacturer.vue'; // @ is an alias to /src
import { ManufacturerModel} from '@/models'
import { ManufacturerProvider } from '@/providers'
@Component({
  components: {
  Manufacturer,
  },
  })
  export default class ManufacturerView extends Vue {
    manufacturers: ManufacturerModel[] = [];
    manufacturerprovider: ManufacturerProvider = new ManufacturerProvider();

    // Load the manufactureres info
    mounted() {
        this.manufacturerprovider.getAllManufacturers().then((data) => {
            this.manufacturers = data;
        })
    }
  }
</script>

<style scoped lang="scss">
    .manu_image {
        height: 400px;
    }
</style>



