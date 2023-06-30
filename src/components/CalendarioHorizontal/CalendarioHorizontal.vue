<template>
	<div class="calendario-horizontal">
		<div class="dias">
			<div
				v-for="(dia, index) in dias"
				:key="index"
				:class="getClasseDiaSelecionado(index)"
				class="has-text-weight-bold"
				@click="selecionarDia(index)"
			>
				{{ dia }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CalendarioHorizontal",
		data() {
			return {
				dias: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
				dataAtual: "",
				diaSelecionado: "",
				teste:"",
			};
		},
		props: {
			selectedDay: String,
		},
		created() {
			this.dataAtual = new Date();
			this.diaSelecionado = this.dataAtual.getDay();
		},
		mounted(){
			this.teste = this.selectedDay
		},
		watch: {
			teste(){
				this.diaSelecionado = this.selectedDay
			},
			diaSelecionado() {
				this.$emit("dia-selecionado", this.diaSelecionado);
			},
		},
		methods: {
			getClasseDiaSelecionado(index) {
				return {
					ativo: index == this.diaSelecionado,
					animado: index == this.diaSelecionado,
				};
			},
			avancarDia() {
				if (this.diaSelecionado < 6) {
					this.diaSelecionado++;
				} else {
					this.diaSelecionado = 0;
				}
			},
			voltarDia() {
				if (this.diaSelecionado > 0) {
					this.diaSelecionado--;
				} else {
					this.diaSelecionado = 6;
				}
			},
			selecionarDia(index) {
				this.diaSelecionado = index;
			},
		},
	};
</script>

<style scoped>
	.calendario-horizontal {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 10px 0;
		position: relative;

		width: 100%;
		height: 100%;
	}

	.calendario-horizontal .dias {
		display: flex;
		align-items: center;
		flex: 1;

		height: 100%;
		/* overflow-x: hidden; */
	}

	.calendario-horizontal .dias div {
		width: 100%;
		height: 100%;
		margin: 2px;
		border-radius: 5px;
		background-color: #ff90e7;
		color: #1b3c1d;
		box-shadow: 3px 6px #cccccc15;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		font-weight: bold;
		padding: 10px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.calendario-horizontal .dias div.ativo {
		background-color: #1b3c1d;
		color: #eae2d6;
	}

	.calendario-horizontal .dias div.animado {
		animation-name: fadeInOut;
		animation-duration: 0.3s;
	}

	@keyframes fadeInOut {
		0% {
			opacity: 0;
			transform: scale(0.9);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
