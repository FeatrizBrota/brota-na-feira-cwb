<template>
	<div class="progresso">
		<span v-if="!dadosCarregados" class="horarios skeleton-loading"></span>
		<span v-else class="horarios">{{ inicio }} - {{ fim }}</span>
		<div class="barra-wrapper">
			<div v-if="!dadosCarregados" class="loading-bar"></div>

			<div
				v-else
				class="barra"
				:class="{
					'barra-iniciada': progresso > 0,
					'barra-encerrada': progresso === 100,
				}"
				:style="{ width: progresso + '%' }"
			></div>
			<p v-if="progresso < 0">A feira ainda não começou</p>
			<p v-else-if="progresso === 100">A feira ja terminou</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BarraProgresso",
		props: {
			dataInicio: {
				type: String,
				required: true,
			},
			dataFim: {
				type: String,
				required: true,
			},
			dia: {
				type: Array,
				required: true,
			},
		},
		data() {
			return {
				progresso: 0,
				inicio: "",
				fim: "",
				dadosCarregados: false,
			};
		},
		mounted() {
			this.carregarDados();
		},
		watch: {
			dataInicio() {
				this.carregarDados();
			},
		},
		methods: {
			carregarDados() {
				const inicioHoras = parseInt(this.dataInicio);
				const fimHoras = parseInt(this.dataFim);

				const agora = new Date().getHours();
				const diaSemana = new Date().getDay();
  


				const duracao = fimHoras - inicioHoras;
				const decorrido = agora - inicioHoras;

				if (duracao <= 0) {
					this.progresso = 100; // Feira já terminou
				} else if (this.dia.includes(diaSemana)) {
					this.progresso = Math.min(
						100,
						Math.round((decorrido / duracao) * 100)
					);
				} else {
					this.progresso = -1; // Não é o dia da feira
				}

				this.inicio = this.dataInicio;
				this.fim = this.dataFim;
				this.dadosCarregados = true;
			},
		},
	};
</script>

<style scoped>
	.progresso {
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
		align-items: center;
	}

	p {
		margin-top: -30px;
		color: #ff8300;
		font-size: 12px;
	}
	.barra-wrapper {
		width: 50%;
		height: 10px;
		border-radius: 5px;
		background-color: #ddd;
		position: relative;
	}

	.skeleton-loading {
		display: inline-block;
		height: 1em;
		width: 80px;
		background-color: #ddddddb2;
		border-radius: 5px;
	}

	.horarios {
		font-size: 1.2em;
	}

	.loading-bar {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background-color: #dddddde5;
		border-radius: 5px;
	}

	.barra {
		height: 100%;
		border-radius: 5px;
		transition: width 0.3s;
	}

	.barra-iniciada {
		background-color: #ff8300;
	}

	.barra-encerrada {
		background-color: #6e6e6e;
	}
</style>
