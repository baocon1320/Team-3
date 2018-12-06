<template>
  <div class="application--wrap bgcolor">
    <div class = "left_display v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open">
      <ManagerBar></ManagerBar>
    </div>
    <div class = "right_display">
      <div class = "item_redirect">
        <div class="subheading blue--text"> Item Manager > </div>
      </div>
      <div class="table_display">
        <div id="app">
          <v-app id="inspire">
            <v-card >
              <v-card-title >
                Items Detail
                <v-spacer></v-spacer>
                <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <v-btn slot="activator"  
                  fab small dark
                  @click="setItemInfo(0)">
                  <v-icon>add</v-icon>
                </v-btn>                
              </v-dialog>
            </v-card-title>

            <v-data-table
            :headers="headers"
            :items="items"
            :search="search"
            >
            <template slot="items" slot-scope="props">

              <td>{{ props.item.item_name }}</td>
              <td>{{ props.item.price }}</td>
              <td>{{ props.item.stock }}</td>
              <td>{{ props.item.image }}</td>
              <td>{{ category_names[props.item.category_id - 1] }}</td>
              <td>{{ manufacture_names[props.item.manufacturer_id -1]}}</td>
              <td>
                <v-btn
                fab small dark 
                @click="deleteItem(props.item.id)"
                >
                <v-icon>delete</v-icon>
              </v-btn>
              <v-dialog v-model="dialog" persistent max-width="600px">

                <v-btn slot="activator"
                fab small dark
                @click="setItemInfo(props.item.id)">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-card>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-card-title>
                    <span class="headline">Item Modification</span>
                  </v-card-title>
                  <v-card-text>

                    <v-container grid-list-md>
                      <v-layout wrap>
                        <v-flex xs12>
                          <v-text-field label="Item Name*" :rules="[v => !!v || 'Item Name is required']"
                            v-model="itemName" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            
                            <v-textarea
                            v-model="description"

                            label="Description"
                            required
                            :rules="[v => !!v || 'Description is required']"
                            ></v-textarea>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-text-field label="Price*" required
                            v-model="price"
                            :rules="[v => !!v || 'Price is required']"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-text-field label="Stock*" required
                            v-model="stock"
                            :rules="[v => !!v || 'Stock is required']"></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Image*" :rules="[v => !!v || 'Image is required']"
                              v-model="image" required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-select
                              :items="category_names"
                              label="Category*"
                              v-model = "category_name"
                              required
                              ></v-select>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-select
                              :items="manufacture_names"
                              label="Manufacturer*"
                              v-model = "manufacturer_name"
                              required
                              ></v-select>
                            </v-flex>
                          </v-layout>
                        </v-container>
                        <small>*indicates required field</small>
                        <!-- <div v-if="check == 1" class="v-messages theme--light error--text subheading font-weight-light error-center"> Username already exists </div> -->
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click="check = 0; dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" flat :disabled="!valid" @click="updateItem()"
                        >Save</v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>


              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
      </v-app>
    </div> 
  </div>   
  <!-- <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
    <img :src="imageUrl" height="150" v-if="imageUrl"/>
    <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
    <input
    type="file"
    style="display: none"
    ref="image"
    accept="image/*"
    @change="onFilePicked"
    >
  </v-flex> -->
</div>  

</div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import ManagerBar from '@/components/ManagerBar.vue'
  import {  ItemModel, CategoryModel, ManufacturerModel } from '@/models';
  import {  ItemProvider, CategoryProvider, ManufacturerProvider } from '@/providers';
  import axios from 'axios';


  @Component({
    components: {
      ManagerBar
    },
  })
  export default class AccountManagerView extends Vue {
    imageName:  string =  'aaa';
    imageUrl: string = '';
    imageFile: string = '';
    id: number = 0;
    items: ItemModel[] = [];
    item: ItemModel = new ItemModel('',0,0,'',0,0,'',0);
    itemprovider: ItemProvider = new ItemProvider();
    categories: CategoryModel[] = [];
    category_names: string[] = [];
    categoryprovider: CategoryProvider = new CategoryProvider();
    manufacturers: ManufacturerModel[] = [];
    manufacture_names: string[] = [];
    manufacturerprovider: ManufacturerProvider = new ManufacturerProvider();
    itemName: string = '';
    description: string ='';
    price: number = 0;
    stock: number = 0;
    image: string = '';
    category_name = '';
    manufacturer_name = '';
    search = '';
    dialog: boolean = false;
    valid: boolean = true;
    headers = [

    { text: 'ItemName', value: 'item_name', align: 'left', sortable: true},
    { text: 'Price', value: 'price'},
    { text: 'Stock', value: 'stock'},
    { text: 'Image', value: 'image'},
    { text: 'Manufacturer', value: 'manufacturer_id'},
    { text: 'Category', value: 'category_id'},
    { text: 'Modification', value: 'modification'}
    ];


    // Get all the Item, the name of categories, and manufactureres
    mounted(){
      this.itemprovider.getAllItems().then(data => {
        this.items = data;
      })
      this.categoryprovider.getAllCategories().then(data => {
        this.categories = data;
        this.category_names = Array.from(this.categories, x => x.name);
      });
      this.manufacturerprovider.getAllManufacturers().then(data => {
        this.manufacturers = data;
        this.manufacture_names = Array.from(this.manufacturers, x => x.name);
      })
    }

    // Get the info of specific item when click to modify
    setItemInfo(id: number){
      if(id != 0){
        const temp = this.items.find(obj => obj.id == id) || this.item;
        this.item = temp
        this.id = id;
        this.itemName = this.item.item_name;
        this.description = this.item.description;
        this.price = this.item.price;
        this.stock = this.item.stock;
        this.image = this.item.image;
        this.category_name = this.category_names[this.item.category_id - 1];
        this.manufacturer_name = this.manufacture_names[this.item.manufacturer_id - 1];
      } else {
        this.clear();
      }
    }

    // Update the info of an item
    updateItem(){
      if ((this.$refs.form as any).validate()) {
        this.item.item_name = this.itemName;
        this.item.description = this.description;
        this.item.price = this.price;
        this.item.stock = this.stock;
        this.item.image = this.image;
        this.item.category_id = this.category_names.indexOf(this.category_name) + 1;
        this.item.manufacturer_id = this.manufacture_names.indexOf(this.manufacturer_name) + 1;
        if(this.id != 0){
          this.itemprovider.updateItem(this.item, this.id).then(data_ => {
            this.itemprovider.getAllItems().then(data => {
              this.items = data;
              this.dialog = false;
            });
          });
        } else {
          this.itemprovider.createItem(this.item).then(data_ => {
            this.itemprovider.getAllItems().then(data => {
              this.items = data;
              this.dialog = false;
            });
          });
        }
      }
    }

    // Delete an item
    deleteItem(id: number){
      this.itemprovider.deleteItem(id).then(data => {
        this.itemprovider.getAllItems().then(data_new => {
          this.items = data_new;
        })
      });
    }

    // Clear the form
    clear () {
      (this.$refs.form as any).reset();

    }
    // pickFile () {
    //   (this.$refs.image as any).click ();
    // }
    // onFilePicked (e : any) {
    //   this.imageName = 'eee';
    //   const files = e.target.files;
    //   if(files[0] !== undefined) {

    //     this.imageName = files[0].name
    //     if(this.imageName.lastIndexOf('.') <= 0) {
    //       return
    //     }
    //     const fr = new FileReader ()
    //     fr.readAsDataURL(files[0])
    //     fr.addEventListener('load', () => {
    //       this.imageUrl = fr.result;
    //       this.imageFile = files[0] // this is an image file that can be sent to server...
    //       let formData = new FormData();
    //       formData.append('file', this.imageFile);
    //       axios.post( '/img',
    //         formData,
    //         {
    //           headers: {
    //             'Content-Type': 'multipart/form-data'
    //           }
    //         }
    //         ).then(function(){
    //           console.log('SUCCESS!!');
    //         })
    //         .catch(function(){
    //           console.log('FAILURE!!');
    //         });
    //       })
    //   } else {
    //     this.imageName = 'vvv'
    //     this.imageFile = ''
    //     this.imageUrl = ''
    //   }
    // }

  }


</script>

<style scoped lang="scss">
.table_display {
  background-color: #f7f7f7;
  margin: auto;
  padding-top: 25px;
}
</style>

