<template>
  <div class="application--wrap bgcolor">
    <div class = "left_display v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--open">
      <ManagerBar></ManagerBar>
    </div>
    <div class = "right_display">
      <div class = "item_redirect">
        <div class="subheading blue--text"> Change Password > </div>
      </div>
      <div class="general_page">
        <div id="app">
          <v-app id="inspire">      
            <v-form ref="form" v-model="valid" lazy-validation>
             <v-container grid-list-md class="main_color">
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field
                  v-model="phoneNumber"
                  :rules="[v => !!v || 'Phone Number is required']"
                  label="Phone Number"
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                  v-model="about"

                  label="About Us"
                  required
                  :rules="[v => !!v || 'About Us is required']"
                  ></v-textarea>
                </v-flex>
                <v-flex xs12>
                 <v-textarea
                 v-model="hours"

                 label="Store Hours"
                 required
                 :rules="[v => !!v || 'Store Hours is required']"
                 ></v-textarea>
               </v-flex>
               <v-flex xs12>
                <v-textarea
                v-model="announcement"

                label="Announcements"
                required
                :rules="[v => !!v || 'Announcements is required']"
                ></v-textarea>
              </v-flex>
              <v-btn
              :disabled="!valid"
              @click="submit"
              >
              submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
          </v-layout>
        </v-container>
      </v-form>
    </v-app>
    <div v-if="check == 1" class="v-messages error--text subheading font-weight-light error-center"> Change General Information Successfully</div>
  </div>
</div>      
</div>       
</div>
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import ManagerBar from '@/components/ManagerBar.vue'
  import {  GeneralModel } from '@/models';
  import {  GeneralProvider } from '@/providers';



  @Component({
    components: {
      ManagerBar
    },
  })
  export default class PasswordManagerView extends Vue {
    check: number = 0;
    valid: boolean = true;
    about: string = '';
    hours: string ='';
    phoneNumber: string = '';
    announcement: string ='';
    generalprovider: GeneralProvider = new GeneralProvider();
    general: GeneralModel = new GeneralModel('','','','');

    // Load the main page info
    mounted() {
      this.generalprovider.getGeneralById(1).then((data) => {
        this.general = data;
        this.about = this.general.storeDescription;
        this.hours = this.general.storeHours;
        this.announcement = this.general.textBody;
        this.phoneNumber = this.general.phoneNumber;
      })

    }

    // Clear the forms
    clear () {
      (this.$refs.form as any).reset();
    }

    // Submit to change the main page info
    submit() {
      if ((this.$refs.form as any).validate()) {
        this.general.storeDescription = this.about;
        this.general.storeHours = this.hours;
        this.general.textBody = this.announcement;
        this.general.phoneNumber = this.phoneNumber;
        this.generalprovider.updateGeneral(1, this.general).then((data) => {
          this.check = 1;
        })
      }

    }


  }

</script>

<style scoped lang="scss">
</style>

