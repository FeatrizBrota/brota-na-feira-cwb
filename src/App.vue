<template>
	<div>
		<MenuBarra></MenuBarra>

		<div class="container">
			<RouterView></RouterView>
		</div>
		<FooterBar></FooterBar>
	</div>
</template>

<script>
	import MenuBarra from "./components/MenuBarra/MenuBarra.vue";
	import FooterBar from "./components/Footer/FooterBar.vue";

	export default {
		name: "App",
		components: {
			MenuBarra,
			FooterBar,
		},
	};
</script>

<style>
	@import "./assets/styles/variables.scss";
	#app {
		font-family: "Raleway", sans-serif;
		text-align: center;
		color: #2c3e50;
		background-color: #f8f3f3;
		max-height: 100%;
		/* padding-bottom: 100px; Define uma margem inferior para reservar espaço para o menu bar */
	}
.container{
	padding-top: 40px;
}
	.columns {
		display: flex;
		flex-wrap: wrap;
	}

	.column {
		flex: 1;
	}

	@media screen and (max-width: 1023px) {
		.columns {
			flex-direction: column;
		}
	}
</style>
