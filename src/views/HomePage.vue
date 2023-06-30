<template>
	<section class="home-page">
		<div class="container">
			<SearchInput @search="updateSearchQuery"></SearchInput>
			<ListagemFeiras
				@update:searchQuery="onSearchQueryUpdate"
				:searchQuery="searchQuery"
				:tag="tag"
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
				tag: '',
			};
		},
		watch: {
			"$route.params": {
				immediate: true,
				deep: true,
				handler(newParams) {
					if (newParams && newParams.tag) {
						const newTag = newParams.tag;
						

						// Verificar se a tag é uma string de um número
						const tagIsNumberString = /^\d+$/.test(newTag);

						if (tagIsNumberString) {
							this.tag = newTag; // Salvar em this.tag se for uma string de um número
						} else {
							this.searchQuery = newTag; // Salvar em this.searchQuery caso contrário
						}
					}
				},
			},
		},

		mounted() {
			window.addEventListener("resize", this.handleResize);
			this.tag = this.$route.params.tag;
		},
		beforeUnmount() {
			window.removeEventListener("resize", this.handleResize);
		},
		methods: {
			updateSearchQuery(query) {
				this.searchQuery = query;
			},
			onSearchQueryUpdate(newSearchQuery) {
				this.searchQuery = newSearchQuery; // Atualizar a propriedade searchQuery com o valor emitido pelo componente filho
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
