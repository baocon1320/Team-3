<template>
	<div class="navButton">
		<div id="home">
			<router-link to="/">Home</router-link>
		</div>
		<div id="services">
			<router-link to="/services">Services</router-link>
		</div>
		<div id="manufacturers">
			<router-link to="/manufacturers">Manufacturers</router-link>
		</div>
		<div id="tracking">
			<router-link to="/tracking">Tracking</router-link>
		</div>
		<div id="login">
			<router-link to="/login">Login</router-link>
		</div>
		<router-view/>
	</div>

</template>
<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component
export default class ToolbarComp extends Vue{
	@Prop() private msg!: string;
}
</script>
<style lang ="scss">
.navButton{
	font-family: 'Roboto',san-serif;
}
#home{
	position:center;
	padding:20px;
	a{
		font-weight: bold;
		color: black;
		&.router-link-exact-active{
			color:white;
		}
	}
}
#services{
	position:center;
	padding:20px;
	a{
		font-weight: bold;
		color: black;
		&.router-link-exact-active{
			color:white;
		}
	}
}
#manufacturers{
	position:center;
	padding:20px;
	a{
		font-weight: bold;
		color: black;
		&.router-link-exact-active{
			color:white;
		}
	}
}
#tracking{
	position:center;
	padding:20px;
	a{
		font-weight: bold;
		color: black;
		&.router-link-exact-active{
			color:white;
		}
	}
}
#login{
	position:center;
	padding:20px;
	a{
		font-weight: bold;
		color: black;
		&.router-link-exact-active{
			color:white;
		}
	}
}

</style>
