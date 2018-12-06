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
              </v-card-title>

              <v-data-table
              :headers="headers"
              :items="orders"
              :search="search"
              >
              <template slot="items" slot-scope="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.customerName }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.priceTotal }}</td>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.date}}</td>
                <td>
                  <v-dialog v-model="dialog" persistent max-width="600px">

                    <v-btn slot="activator"
                    fab small dark
                    @click="setOrderInfo(props.item.id)"
                    v-if="props.item.status == 'Processing' || props.item.status == 'Ready'">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-card>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-card-title>
                        <span class="headline">Order Modification</span>
                      </v-card-title>
                      <v-card-text>

                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12>
                              <v-text-field label="Order Number" disabled="true" v-model="id"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Customer Name"  
                              v-model="customerName" :rules="[v => !!v || 'Customer Name is required']"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                              <v-text-field label="Email Address"  v-model="email"
                              :rules="[v => !!v || 'Email Address is required']"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field label="Phone Number"  v-model="phoneNumber"
                              :rules="[v => !!v || 'Phone Number is required']"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field label="Total Price" disabled="true" v-model="price"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-text-field label="Order Date" disabled="true" v-model="date"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                              <v-select
                              :items="status_Mean"
                              label="Status"
                              v-model = "status"
                              required
                              ></v-select>
                            </v-flex>
                          </v-layout>
                        </v-container>  
                        <v-container grid-list-md>
                          <span class="headline">Order Detail</span>
                          <v-layout wrap v-for="it in itemOrders" :key="it.id">

                           <v-flex xs12 sm4>
                            <v-text-field label="Item Id" v-model="it.item_id" disabled="true"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-select
                            :items="quantityList(it.quantity)"
                            label="Status"
                            v-model = "it.quantity"
                            required
                            ></v-select>
                          </v-flex>
                          <v-flex xs12 sm4>
                            <v-text-field label="Price" v-model="it.item_price" disabled="true"></v-text-field>
                          </v-flex>

                        </v-layout>
                      </v-container>


                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click="check = 0; dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" flat :disabled="!valid" @click="updateOrder(0)"
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
</div>  

</div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import ManagerBar from '@/components/ManagerBar.vue'
  import {  ItemModel, OrderModel, ItemOrderFKModel } from '@/models';
  import {  ItemProvider, OrderProvider, ItemOrderProvider } from '@/providers';
  import axios from 'axios';


  @Component({
    components: {
      ManagerBar
    },
  })
  export default class AccountManagerView extends Vue {
    id: number = 0;
    items: ItemModel[] = [];
    item: ItemModel = new ItemModel('',0,0,'',0,0,'',0);
    itemprovider: ItemProvider = new ItemProvider();
    orders: OrderModel[] = [];
    order: OrderModel = new OrderModel(0, '', '', 0, 0, '', '', '', '');
    orderprovider: OrderProvider = new OrderProvider();
    itemOrders: ItemOrderFKModel[] =[];
    itemOrders_save: ItemOrderFKModel[] =[];
    itemOrder: ItemOrderFKModel = new ItemOrderFKModel(0,0,0,0);
    itemOrderprovider: ItemOrderProvider =  new ItemOrderProvider();
    customerName: string = '';
    email: string ='';
    phoneNumber: string = '';
    date: string|null = null;
    price: number = 0.0;
    status: string = '';
    search = '';
    dialog: boolean = false;
    valid: boolean = true;
    
    headers = [
    
    { text: 'Order#', value: 'id', align: 'left'},
    { text: 'Customer Name', value: 'customerName'},
    { text: 'Email', value: 'email'},
    { text: 'Price', value: 'price'},
    { text: 'Status', value: 'status'},
    { text: 'Order Date', value: 'date', sortable: true},
    { text: 'Modification', value: 'modification'}
    ];

    status_Mean: string[] = ['Processing', 'Ready', 'Picked up', 'Cancel' ]

    // Load all the orders
    mounted(){
      this.orderprovider.getAllOrder().then(data => {
        this.orders = data;
      })
    }

    // Create a list of quantities from 0 to maxItems
    quantityList(maxItems: number) {
      var result = []
      for(var i = 0; i <= maxItems; i++)
        result.push(i);
      return result;
    }

    // display the info of specific order when click on button edit
    setOrderInfo(id: number){
      if(id != 0){
        const temp = this.orders.find(obj => obj.id == id) || this.order;
        this.order = temp
        this.id = id;
        this.customerName = this.order.customerName;
        this.email = this.order.email;
        this.phoneNumber = this.order.phoneNumber;
        this.date = this.order.date;
        this.status = this.order.status;
        this.itemOrderprovider.getItemOrderFKByOrderId(id).then((data) => {
          this.itemOrders = data;
          
        });
      } else {
        this.clear();
      }
    }

    // Update the Oder after change
    updateOrder(i : number){
      if ((this.$refs.form as any).validate()) {
        if(this.status == 'Cancel'){
          for(i = 0; i < this.itemOrders.length; i++){
            this.itemOrders[i].quantity  = 0;
          }
        }
        this.price = 0;
        for(i = 0; i < this.itemOrders.length; i++){
           this.price +=  this.itemOrders[i].quantity * this.itemOrders[i].item_price;
        }
        this.order.status = this.status;
        this.order.priceTotal = this.price;
        this.order.customerName = this.customerName;
        this.order.email = this.email;
        this.order.phoneNumber = this.phoneNumber;
        this.orderprovider.updateOrder(this.id, this.order).then((or_data) => {

        this.itemOrderprovider.getItemOrderFKByOrderId(this.id).then((data_its) => {
          this.itemOrders_save = data_its;
          for(i = 0; i < this.itemOrders.length; i++){
           var diff = this.itemOrders_save[i].quantity - this.itemOrders[i].quantity;
           var item_id = this.itemOrders_save[i].item_id;
           if(diff != 0){
            this.itemOrderprovider.updateItemOrderFK(this.itemOrders[i].id, this.itemOrders[i])
            .then((data) => {
              this.itemprovider.getItemById(item_id.toString()).then((item_data) => {
                this.item = item_data;
                this.item.stock = this.item.stock + diff;
                this.itemprovider.updateItem(this.item, item_data.id).then((new_data) => {
                  this.dialog= false; 
                });
              });
              
            });
          }
        }
        this.dialog= false;  
      });
    })

      }
      
    }

    // Clear the form
    clear () {
      (this.$refs.form as any).reset();

    }

  }


</script>

<style scoped lang="scss">
.table_display {
  background-color: #f7f7f7;
  margin: auto;
  padding-top: 25px;
}
</style>

