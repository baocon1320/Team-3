<template>
	<div class="centered"> 
		<h1 class="heading">Success...</h1>
		<h2>Thanks for shopping at foxycle your order id is: {{$route.params.order_id}}</h2>
		<h2>Navigate to the Tracking Page to track your order</h2>
	</div>
	
</template>


<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { OrderProvider} from '@/providers';
  import { OrderModel } from '@/models';

  @Component
  export default class ConfirmationView extends Vue {
    @Prop() private msg!: string;


  }

</script>

<style scoped lang="scss">

.centered{
	margin-top: 10%;
	text-align: center;
}

.heading{
	text-align:center;
}

</style>
