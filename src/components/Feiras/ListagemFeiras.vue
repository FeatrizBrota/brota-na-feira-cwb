<template>
	<div class="container">
		<TagContainer v-if="searchQuery == ''">
			<div class="tag" v-for="(tag, index) in tiposDeFeira" :key="index">
				<TagsInfo
					:title="tag"
					@click="filtrarFeirasPorTag(tag)"
					:selected="tag === localSearchQuery"
					:type="'tipo-home'"
				></TagsInfo>
			</div>
		</TagContainer>
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
			tag: {
				type: String,
				default: "",
				reactive: true, // Ensure reactivity for the prop
			},
		},
		data() {
			return {
				feiras: {},
				feiras_semana: {},
				localSearchQuery: "",
				selectedDay: "",
			};
		},
		created() {
			this.selectedDay = this.tag;
		},
		mounted() {
			this.listarFeiras();
			this.selectedDay = this.tag;
		},
		watch: {},
		computed: {
			tiposDeFeira() {
				if (this.feiras === undefined) {
					return [];
				}
				const feirasArray = Object.values(this.feiras);
				const tipos = feirasArray.reduce((tiposUnicos, feira) => {
					if (!tiposUnicos.includes(feira.tipo)) {
						tiposUnicos.push(feira.tipo);
					}
					return tiposUnicos;
				}, []);
				return tipos;
			},

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
				if (this.localSearchQuery.length > 0 && filtro.length > 0) {
					const localSearchQueryNormalized = normalizeString(
						this.localSearchQuery
					);
					filtro = filtro.filter((feira) =>
						normalizeString(feira.tipo).includes(localSearchQueryNormalized)
					);
				}
				if (this.searchQuery.length > 0 && filtro.length > 0) {
					const searchQueryNormalized = normalizeString(this.searchQuery);
					filtro = filtro.filter(
						(feira) =>
							normalizeString(feira.nome).includes(searchQueryNormalized) ||
							normalizeString(feira.bairro).includes(searchQueryNormalized) ||
							normalizeString(feira.tipo).includes(searchQueryNormalized) ||
							normalizeString(feira.referencia).includes(searchQueryNormalized)
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
						this.feiras = this.sortedFeiras(); // Ordenar as feiras após receber a resposta da API
						this.separarFeirasPorDia();
					})
					.catch((error) => {
						console.log(error);
					});
			},

			sortedFeiras() {
				if (this.feiras.length === 0) {
					return [];
				}

				const currentTime = new Date().getHours();
				// Obtém o horário atual em milissegundos
				const sortedFeiras = [...this.feiras]; // Cria uma cópia do array de feiras

				// Função auxiliar para converter o horário no formato "11h" para milissegundos
				const convertTimeStringToMilliseconds = (timeString) => {
					const hours = parseInt(timeString.replace("h", ""));
					return hours
				};

				// Ordena as feiras com base no horário de início
				sortedFeiras.sort((a, b) => {
					const timeA = convertTimeStringToMilliseconds(a.horario_inicial);
					const timeB = convertTimeStringToMilliseconds(b.horario_inicial);

					if (timeA === timeB) {
						return 0;
					} else if (timeA > timeB) {
						return 1;
					} else {
						return -1;
					}
				});

				// Divide as feiras em três grupos: feiras que já começaram, feiras que ainda vão começar e feiras que já terminaram
				const currentFeiras = sortedFeiras.filter((feira) => {
					const startTime = convertTimeStringToMilliseconds(
						feira.horario_inicial
					);
					const endTime = convertTimeStringToMilliseconds(feira.horario_final);
					return startTime <= currentTime && currentTime <= endTime;
				});

				const upcomingFeiras = sortedFeiras.filter((feira) => {
					const startTime = convertTimeStringToMilliseconds(
						feira.horario_inicial
					);
					return startTime > currentTime;
				});

				const pastFeiras = sortedFeiras.filter((feira) => {
					const endTime = convertTimeStringToMilliseconds(feira.horario_final);
					return endTime < currentTime;
				});

		

				// Concatena os grupos de feiras na ordem desejada
				return [...currentFeiras, ...upcomingFeiras, ...pastFeiras];
			},

			separarFeirasPorDia() {
				const feirasPorDia = {
					0: [], // domingo
					1: [], // segunda
					2: [], // terça
					3: [], // quarta
					4: [], // quinta
					5: [], // sexta
					6: [], // sábado
				};

				this.feiras.forEach((feira) => {
					feira.dia_da_semana.forEach((dia) => {
						feirasPorDia[dia].push(feira);
					});
				});

				this.feiras_semana = feirasPorDia;
			},

			filtrarFeirasPorTag(tagTitle) {
				if (this.localSearchQuery == tagTitle) {
					this.localSearchQuery = "";
					// this.$emit("update:searchQuery", ""); // Emitir evento para atualizar a propriedade searchQuery no componente pai
				} else {
					this.localSearchQuery = tagTitle;
					// this.$emit("update:searchQuery", tagTitle); // Emitir evento para atualizar a propriedade searchQuery no componente pai
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
