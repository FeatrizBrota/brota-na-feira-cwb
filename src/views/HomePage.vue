<template>
	<section class="home-page">
		<div class="container">
			<SearchInput @search="updateSearchQuery"></SearchInput>
			<ListagemFeiras
				:searchQuery="searchQuery"
				:selectedDay="selectedDay"
			></ListagemFeiras>
		</div>
	</section>
</template>

<script>
	import ListagemFeiras from "../components/Feiras/ListagemFeiras.vue";
	import SearchInput from "../components/SearchInput/SearchInput.vue";

	export default {
		name: "HomePage",
		components: { ListagemFeiras, SearchInput },
		data() {
			return {
				searchQuery: "",
				selectedDay: null,
			};
		},
		mounted() {
			window.addEventListener("resize", this.handleResize);
      this.selectedDay = this.$route.params.tag;
		},
		beforeUnmount() {
			window.removeEventListener("resize", this.handleResize);
		},
		methods: {
			updateSearchQuery(query) {
				this.searchQuery = query;
			},
		},
	};
</script>

<style scoped>
	.container {
		min-height: 100vh;
		padding-bottom: 30px;
	}

	.web-margin {
		padding-top: 50px;
	}

	@media (max-width: 767px) {
		.web-margin {
			margin-top: 0;
		}
	}
</style>
