<template>
   <div class="background">
	<div class="navButton">
        <img id="logo" src="../assets/bike.jpg" alt="../assets/logo.png"></img>
		<div id="home">
			<router-link to="/">Home</router-link>
		</div> |
		<div id="services">
			<router-link to="/services">Services</router-link>
		</div> |
		<div id="manufacturers">
			<router-link to="/manufacturers">Manufacturers</router-link>
		</div> |
		<div id="tracking">
			<router-link to="/tracking">Tracking</router-link>
		</div> |
		<div id="login">
			<router-link to="/login">Login</router-link>
		</div> |
		<router-view/>
	</div>
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
#logo{
    float: left;
    position: absolute;
    border-color: black;
    top: 8px;
    left: 16px;
    padding: 10px;
    width: 100px;
    height: 68px;
}
.background{
    background-color: beige;
    margin: auto 10px;
    width: auto;
    height: 1000px;
}
.navButton{
    -moz-box-sizing:    border-box;
    -webkit-box-sizing: border-box;
    box-sizing:        border-box;
	font-family: 'Roboto',san-serif;
}
#home{
	text-align: center;
    border-color: black;
    display:inline-block;
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
	text-align: left;
    display:inline-block;
    border-color: black;
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
	text-align: center;
    display:inline-block;
    border-color: black;
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
	text-align: center;
    display:inline-block;
    border-color: black;
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
	text-align: center;
    display:inline-block;
    border-color: black;
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
