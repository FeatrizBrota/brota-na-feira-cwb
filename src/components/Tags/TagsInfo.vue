<template>
	<div
		:class="[tagClass, { selecionada: selected }]"
		@click="selectDay(title, $event)"
	>
		<span v-if="type == 'dia'">{{ retornaDia(title) }} </span>
		<span v-else>{{ title }} </span>
	</div>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				required: true,
			},
			page: {
				type: String,
				default: "home",
			},
			color: {
				type: String,
				default: "verde-claro",
			},
			selected: {
				type: Boolean,
				default: false,
			},
			type: {
				type: String,
				default: "dia",
			},
		},
		computed: {
			tagClass() {
				return "tag " + this.color;
			},
		},
		methods: {
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
			selectDay(tag, event) {
				if (this.page != "home") {
					event.stopPropagation();
					const routeParams = { tag: tag };
					this.$router.push({ name: "HomePage", params: routeParams });
				}
			},
		},
	};
</script>

<style scoped>
	.tag {
		display: inline-block;
		margin: 5px;
		cursor: pointer;
		padding: 5px 8px;
		border-radius: 10px;
		font-size: 1rem;
		height: fit-content;
		font-weight: bold;
		z-index: 100000;
	}

	.verde-claro {
		background-color: #b7d739;
		color: #1b3c1d;
	}

	.verde-claro:hover {
		background-color: #1b3c1d;
		color: #b7d739;
	}

	.red {
		background-color: #ff0000;
		color: #ffffff;
	}

	.blue {
		background-color: #0000ff;
		color: #ffffff;
	}

	.green {
		background-color: #00ff00;
		color: #000000;
	}

	.selecionada {
		background-color: #1b3c1d;
		color: #b7d739;
	}
</style>
