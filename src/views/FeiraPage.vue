<template>
	<div class="container">
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
						<TagsInfo :title="retornaDia(feira.dia_da_semana)" :color="'verde-claro'"></TagsInfo>
						<TagsInfo :title="feira.bairro"></TagsInfo>
						<TagsInfo :title="feira.tipo"></TagsInfo>
					</div>
					<div class="horarios">
						<BarraProgresso
							:dataInicio="feira.horario_inicial"
							:dataFim="feira.horario_final"
						></BarraProgresso>
					</div>
				</div>

				<div class="box box-endereco">
					<div class="info-endereco">
						<h2>Como Brotar:</h2>
						<p>{{ feira.endereco }}</p>
						<p class="referencia">{{ feira.referencia }}</p>
					</div>

					<div
						class="img-map"
						@click="
							linkMaps(
								'https://www.google.com/maps/place/rua+da+bandeira+500+cabral'
							)
						"
					>
						<div class="sob-img-map">
							<h1>Brotar</h1>
						</div>
					</div>
				</div>
				<div class="box box-colabore">
					<h2>Essa Informação foi útil?</h2>
					<div class="box-vote">
						<i
							:class="{ active: isLiked === true }"
							class="fa-regular fa-thumbs-up"
							@click="toggleLike"
						></i>
						<i
							class="fa-regular fa-thumbs-down"
							:class="{ active: isDisliked === true }"
							@click="toggleDislike"
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
			</div>
		</div>
	</div>
</template>

<script>
	import BarraProgresso from "@/components/BarraProgresso/BarraProgresso.vue";
	import TagsInfo from "@/components/Tags/TagsInfo.vue";
	import axios from "axios";
	export default {
		name: "FeiraPage",
		components: { BarraProgresso,TagsInfo },
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
					.get(`http://${window.location.hostname}:3000/feiras/${id}`, {
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
			retornaDia(numeroDia) {
				const diasDaSemana = [
					"Domingo",
					"Segunda",
					"Terça",
					"Quarta",
					"Quinta",
					"Sexta",
					"Sábado",
				];
				return diasDaSemana[numeroDia];
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
		min-height: 100vh;
		background-color: #b7d739;
		display: flex;
		margin-bottom: 40px;
		justify-content: center;
	}

	.conteudo {
		min-height: 100%;
		background-color: #fff;
		width: 100%;
		border-radius: 60px 60px 0 0;
		margin-top: 40px;
		padding: 15px;
		
	}
	.header-feira {
		display: flex;
		align-items: center;
		margin-top: 20px;

		// background-color: #b7d739;

		i {
			font-size: 30px;
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

	.referencia{
			font-size: 0.8em;
		}
	.info-endereco {
		line-height:1.8;
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
		justify-content: space-between;
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
				color: #1B3C1D;
				font-size: 20px;
				font-weight: 800;
			}
			h1:hover {
				text-transform: uppercase;
				color: #FF8300;
				font-size: 25px;
				font-weight: 800;
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
.box-colabore{
	margin-bottom: 20px;
}
	.box-vote {
		display: flex;
		justify-content: space-between;
		padding: 10px 100px;
		i {
			font-size: 50px;
		}
	}
</style>
