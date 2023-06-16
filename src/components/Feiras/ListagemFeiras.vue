<template>
	<div class="container">
		<TagContainer>
			<div class="tag" v-for="(tag, index) in tiposDeFeira" :key="index">
				<TagsInfo :title="tag[0]"></TagsInfo>
			</div>
		</TagContainer>
		<ListagemBuscas
			v-if="searchQuery.length > 0"
			:feiras="filteredFeiras"
		></ListagemBuscas>
		<ListagemPadrao v-else :feiras="feiras_semana"></ListagemPadrao>
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
		},
		data() {
			return {
				feiras: {},
				feiras_semana: {},
			};
		},
		created() {},
		mounted() {
			this.listarFeiras();
		},
		computed: {
			filteredFeiras() {
				if (this.feiras === undefined) {
					return [];
				}

				return this.feiras.filter((feira) =>
					feira.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
				);
			},
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
		},
		methods: {
			listarFeiras() {
				axios
					.get(`http://${window.location.hostname}:3000/feiras`, {
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
							feirasPorDia[feira.dia_da_semana].push(feira);
						});

						this.feiras_semana = feirasPorDia;
					})
					.catch((error) => {
						console.log(error);
					});
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
		background-color: #f0f0f0;
		border-radius: 4px;
		text-align: center;
	}
</style>
