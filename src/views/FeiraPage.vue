<template>
	<div class="box container">
		<div class="conteudo">
			<div class="header-feira">
				<div @click="goTo('HomePage')">
					<i class="fa-solid fa-chevron-left"></i>
				</div>

				<div class="titulo">
					<h1>{{ feira.nome }}</h1>
				</div>
			</div>
			<div class="info-feira">
				<div class="info-tags">
					<div class="tags">
						<div class="dia">
							<TagsInfo
								v-for="(dia, index) in feira.dia_da_semana"
								:key="index"
								:title="dia"
								:page="'feira'"
								:color="'verde-claro'"
								class="tag-dia"
							></TagsInfo>
						</div>

						<TagsInfo
							:page="'feira'"
							:type="'bairro'"
							:title="feira.bairro"
						></TagsInfo>
						<TagsInfo
							:page="'feira'"
							:type="'tipo'"
							:title="feira.tipo"
						></TagsInfo>
					</div>
					<div class="horarios">
						<BarraProgresso
							:dataInicio="feira.horario_inicial"
							:dataFim="feira.horario_final"
							:dia="feira.dia_da_semana"
						></BarraProgresso>
					</div>
				</div>

				<div class="box box-endereco">
					<div class="info-endereco">
						<h2>Como Brotar:</h2>
						<p>{{ feira.endereco }} - {{ feira.bairro }}</p>
						<p class="referencia">{{ feira.referencia }}</p>
					</div>

					<div class="img-map" @click="linkMaps(feira.link_maps)">
						<div class="sob-img-map">
							<i class="fa-solid fa-location-dot"></i>
							<h1>Brotar</h1>
						</div>
					</div>
				</div>
				<div v-show="!isLiked && !isDisliked" class="box box-colabore">
					<h2>Essa Informação foi útil?</h2>
					<div class="box-vote">
						<i
							:class="{ active: isLiked === true }"
							class="fa-regular fa-thumbs-up"
							@click="toggleLike"
						></i>
						<i
							class="fa-regular fa-thumbs-down "
							:class="{ active: isDisliked === true }"
							@click="toggleDislike"
							data-target="modalDislike"
						></i>
					</div>

					<p>
						O <strong> Brota na Feira </strong> é um sistema independente que
						conta com a colaboração dos usuários. Precisamos da sua ajuda para
						fornecer informações precisas e atualizadas sobre as feiras da
						cidade. Vote se as informações são válidas. Juntos, construiremos um
						recurso confiável e completo. Participe!
					</p>
				</div>
				<div v-if="isDisliked" class="modal is-active">
					<div class="modal-background"></div>
					<div class="modal-card">
						<header class="modal-card-head">
							<p class="modal-card-title">Reportar erro</p>
							<button class="delete" @click="toggleDislike" aria-label="close"></button>
						</header>
						<section class="modal-card-body">
							<FormMensagem></FormMensagem>
						</section>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BarraProgresso from "@/components/BarraProgresso/BarraProgresso.vue";
	import TagsInfo from "@/components/Tags/TagsInfo.vue";
	import FormMensagem from "../components/Forms/FormMensagem.vue";

	import axios from "axios";
	export default {
		name: "FeiraPage",
		components: { BarraProgresso, TagsInfo ,FormMensagem},
		data() {
			return {
				feiraId: null,
				feira: {},
				isLiked: false,
				isDisliked: false,
			};
		},
		created() {
			// Obtenha o parâmetro feiraId da URL
			this.feiraId = this.$route.query.feiraId;
			this.chamaFeira(this.feiraId);
		},
		methods: {
			chamaFeira(id) {
				axios
					.get(`https://bnf-api-3560514cdc34.herokuapp.com/feiras/${id}`, {
						timeout: 5000,
					})
					.then((response) => {
						// console.log(response.data);
						this.feira = response.data;
					})
					.catch((error) => {
						console.log(error);
					});
			},

			goTo(route) {
				this.$router.push({ name: route });
			},
			linkMaps(url) {
				window.open(url, "_blank");
			},
			toggleLike() {
				this.isLiked = !this.isLiked;
				this.isDisliked = false;
			},
			toggleDislike() {
				this.isDisliked = !this.isDisliked;
				this.isLiked = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: center;
		width: 100%;
		margin: 2rem 0;
	}

	.conteudo {
		background-color: #fff;
		padding: 10px;
		min-height: 100vh;
		min-width: 100%;
	}

	.dia {
		display: flex;
		overflow: auto;
	}
	.header-feira {
		display: flex;
		align-items: center;
		margin-top: 20px;

		// background-color: #b7d739;

		i {
			font-size: 30px;
			cursor: pointer;
			transition: font-size 0.3s, color 0.3s;
		}
		i:hover {
			font-size: 40px;
			color: #ff8300;
		}
	}
	.titulo {
		margin-left: 20px;
		h1 {
			font-size: 2rem;
			text-align: center;
			margin: 0 !important;
		}
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		text-align: center;
	}
	p {
		font-size: 1.1em;
		text-align: left;
	}

	.referencia {
		font-size: 0.8em;
	}
	.info-endereco {
		line-height: 1.8;
		padding: 15px;
	}
	.box-endereco {
		padding: 0 !important;
	}
	.info-tags {
		padding: 20px;
	}
	.tags {
		display: flex;
		justify-content:flex-start;
	}

	.img-map {
		background-image: url("../../public/images/map.png");
		background-size: 100%;
		height: 150px;
		.sob-img-map {
			display: flex;
			align-items: center;
			justify-content: center;
			h1 {
				cursor: pointer;
				user-select: none;
				text-transform: uppercase;
				color: #1b3c1d;
				font-size: 20px;
				font-weight: 800;
			}
			h1:hover {
				text-transform: uppercase;
				color: #ff8300;
				font-size: 25px;
				font-weight: 800;
			}

			i{
				margin-right: 10px;
			}

			background-color: #ff90e757;
			width: 100%;
			height: 100%;
		}
	}

	.vote-icon {
		transition: color 0.3s ease-in-out;
	}

	.thumbs-up.active {
		color: green;
	}
	.fa-regular {
		transition: font-size 0.3s ease-in-out;
	}

	.active {
		color: #ff90e7;
	}
	.box-colabore {
		margin-bottom: 20px;
	}
	.box-vote {
		display: flex;
		justify-content: center;
		padding: 10px 100px;
		i {
			font-size: 50px;
			margin: 15px;
			cursor: pointer;
		}
	}
</style>
