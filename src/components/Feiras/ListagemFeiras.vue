<template>
	<div class="container">
		<TagContainer>
			<div class="tag" v-for="(tag, index) in tiposDeFeira" :key="index">
				<TagsInfo
					:title="tag"
					@click="filtrarFeirasPorTag(tag)"
					:selected="tag === localSearchQuery"
					:type="'tipo'"
				></TagsInfo>
			</div>
		</TagContainer>
--->{{ searchQuery.length }}
		<ListagemBuscas
			v-if="
				searchQuery.length > 0 ||
				(searchQuery.length > 0 && localSearchQuery.length > 0)
			"
			:feiras="filteredFeiras"
		></ListagemBuscas>
	
		<ListagemPadrao
			v-else
			:feiras="feiras_semana"
			:filtro_tipo="localSearchQuery"
			:selectedDay="selectedDay"
		></ListagemPadrao>
	</div>
</template>

<script>
	import TagContainer from "../Tags/TagContainer.vue";
	import TagsInfo from "../Tags/TagsInfo.vue";
	import ListagemBuscas from "./ListagemBuscas.vue";
	import ListagemPadrao from "./ListagemPadrao.vue";
	import axios from "axios";
	

	export default {
		name: "ListagemFeiras",
		components: {
			ListagemPadrao,
			ListagemBuscas,
			TagContainer,
			TagsInfo,
		},
		props: {
			searchQuery: String,
			tag: String,
		},
		data() {
			return {
				feiras: {},
				feiras_semana: {},
				localSearchQuery: "",
				selectedDay: "",
			};
		},
		created() {},
		mounted() {
			this.listarFeiras();
		},
		watch: {
			tag(newTag) {
				if (!isNaN(parseInt(newTag))) {
					this.selectedDay = parseInt(newTag);
				} else {
					this.$emit("update:searchQuery", newTag);
				}
			},
		},
		computed: {
			filteredFeiras() {
				if (this.feiras === undefined) {
					return [];
				}

				if (this.localSearchQuery === "" && this.searchQuery === "") {
					return this.feiras;
				}

				const normalizeString = (str) => {
					return str
						.normalize("NFD")
						.replace(/[\u0300-\u036f]/g, "")
						.replace(/\s+/g, "")
						.toLowerCase();
				};

				let filtro = this.feiras;
				if (this.localSearchQuery.length !== 0) {
					const localSearchQueryNormalized = normalizeString(
						this.localSearchQuery
					);
					filtro = filtro.filter((feira) =>
						normalizeString(feira.tipo).includes(localSearchQueryNormalized)
					);
				}
				if (this.searchQuery.length > 0) {
					const searchQueryNormalized = normalizeString(this.searchQuery);
					filtro = filtro.filter(
						(feira) =>
							normalizeString(feira.nome).includes(searchQueryNormalized) ||
							normalizeString(feira.bairro).includes(searchQueryNormalized)
					);
				}
				return filtro;
			},
		},

		methods: {
			listarFeiras() {
				axios
					.get(`https://bnf-api-3560514cdc34.herokuapp.com/feiras`, {
						timeout: 5000,
					})
					.then((response) => {
						this.feiras = response.data;
						const feirasPorDia = {
							0: [], // domingo
							1: [], // segunda
							2: [], // terça
							3: [], // quarta
							4: [], // quinta
							5: [], // sexta
							6: [], // sábado
						};

						response.data.forEach((feira) => {
							feira.dia_da_semana.forEach((dia) => {
								feirasPorDia[dia].push(feira);
							});
						});

						this.feiras_semana = feirasPorDia;
					})
					.catch((error) => {
						console.log(error);
					});
			},

			filtrarFeirasPorTag(tagTitle) {
				if (this.localSearchQuery == tagTitle) {
					this.localSearchQuery = "";
				} else {
					this.localSearchQuery = tagTitle;
				}
			},
		},
	};
</script>

<style scoped>
	.container {
		padding: 10px;
	}

	.box {
		margin-top: 10px;
		padding: 10px;
		background-color: #f0f0f002;
		border-radius: 4px;
		text-align: center;
	}
</style>
