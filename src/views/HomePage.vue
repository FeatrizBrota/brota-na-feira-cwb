<template>
	<section class="home-page"> 
		<div class="container">
			<SearchInput @search="updateSearchQuery"></SearchInput>
      <SearchResults @clear-search="handleClearSearch" :searchQuery="searchQuery" ></SearchResults>
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
  import SearchResults from "../components/SearchResults/SearchResults.vue";

	export default {
		name: "HomePage",
		components: { ListagemFeiras, SearchInput, SearchResults  },
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
		beforeRouteEnter(to, from, next) {
			// Clear route parameters when the component is first entered
			next(vm => {
				vm.clearRouteParams();
			});
		},
		beforeRouteUpdate(to, from, next) {
			// Clear route parameters when the component is updated
			this.clearRouteParams();
			next();
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
			clearRouteParams() {
				// Clear route parameters
				this.$router.replace({ path: this.$route.path, query: {} });
			},
      handleClearSearch(){
        this.searchQuery = "";
      }
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
