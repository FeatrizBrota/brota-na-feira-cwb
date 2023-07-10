<template>
	<div  class="card card-feira">
		<div class="card-content">
			<div @click="navegarParaFeira(feira)" class="content">
				<div class="display-flex titulo-feira">
					<h1 class="title">{{ feira.nome }}</h1>
					<!-- <i class="fa-regular fa-circle-check"></i> -->
				</div>
				<div class="endereco-feira">
					<h2>{{ feira.endereco }}</h2>
				</div>
				<BarraProgresso
					:dataInicio="feira.horario_inicial"
					:dataFim="feira.horario_final"
				></BarraProgresso>
				<div class="bairro-box">
					<TagsInfo  :type="'bairro'" :title="feira.bairro"></TagsInfo>
					<TagsInfo :type="'tipo'"   :title="feira.tipo"></TagsInfo>
					<div class="dia" v-if="tipo == 'busca' " >
						<TagsInfo
							v-for="(dia, index) in feira.dia_da_semana"
							:key="index"
							:title="dia"
             
						></TagsInfo>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import BarraProgresso from "../BarraProgresso/BarraProgresso.vue";
	import TagsInfo from "../Tags/TagsInfo.vue";

	export default {
		name: "FeiraCard",
		components: { BarraProgresso, TagsInfo },
		props: {
			feira: { type: Object },
			index: { type: Number, default: -1 },
			tipo: { type: String },
		},
		data() {
			return {};
		},
		created() {},
		methods: {
      navegarParaFeira(feira) {
				this.$router.push({ path: "/feira", query: { feiraId: feira._id } });
			},

    },
	};
</script>

<style scoped>
	.card-feira {
		margin-top: 10px;
		cursor: pointer;
	}
	

	@media only screen and (max-width: 767px) {
  /* Estilos para dispositivos móveis */
  .dia{
		display: flex;
		
	}
	.bairro-box {
		overflow-x: scroll;
	}
}

	.dia{
		display: flex;
	}

	.titulo-feira h1 {
		font-size: 1.1rem;
		text-align: left;
		margin: 0 !important;
	}
	.endereco-feira h2 {
		font-size: 1rem;
		text-align: left;
		font-weight: 500;
		margin: 0 !important;
		margin-top: 5px !important;
	}
	.endereco-feira {
		align-items: center !important;
	}

	.bairro-box {
		display: flex;
		align-items: flex-start;
		margin-top: 10px;
	}
	.bairro {
		background-color: #b7d739;
		color: #1b3c1d;
		margin: 0 !important ;
		font-weight: 700;
		padding: 5px;
		border-radius: 10px;
		font-size: 1rem;
	}
	.display-flex {
		display: flex;
		justify-content: space-between;
	}
</style>
