<template>
	<section class="section">
		<div class="container">
			<div class="card main-card">
				<div class="column order-1">
					<h1 class="title">
						Compartilhe Feedbacks, Erros e Ideias de Melhoria
					</h1>
					<p><i class="fa-solid fa-envelope"></i> ola@brotinha.com</p>
				</div>
				<div class="column order-2">
					<FormMensagem></FormMensagem>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import FormMensagem from "../components/Forms/FormMensagem.vue";
	export default {
		data() {
			return {
				nome: "",
				email: "",
				mensagem: "",
			};
		},
		components: { FormMensagem },
		methods: {
		
		},
	};
</script>

<style lang="scss" scoped>
	/* Estilos específicos do componente */

	.card {
		padding: 20px !important;
	}

	.label {
		text-align: left;
		font-weight: 600;
		text-transform: uppercase;
		color: #1b3c1d7e;
		margin: 0;
	}

	.input {
		border: none;
		margin: 0;
		border-bottom: 1px solid #1b3c1d;
		box-shadow: none !important;
		border-radius: 0;
	}
	.textarea {
		border: none;
		margin: 0;
		border-bottom: 1px solid #1b3c1d;
		box-shadow: none !important;
		border-radius: 0;
	}

	.main-card {
		display: flex;
		justify-content: center;
		align-items: center;
    h1{
      color: #1b3c1d;
    }
    
	}

	@media (max-width: 700px) {
		.main-card {
			flex-direction: column;
		}

		.order-1 {
			order: 1;
		}

		.order-2 {
			order: 2;
		}
	}
</style>
