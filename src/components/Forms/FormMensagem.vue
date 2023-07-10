<template>
	<section>
		<form @submit.prevent="enviarFormulario">
			<div class="field flex-field">
				<div class="field is-expanded is-7">
					<label class="label">Nome</label>
					<div class="field">
						<div class="control">
							<input class="input" type="text" v-model="nome" />
						</div>
					</div>
				</div>

				<div class="field is-expanded is-5 teste">
					<label class="label">Assunto</label>

					<div class="field">
						<div class="control">
							<div class="select">
								<select v-model="assunto">
									<option value="bug">Bug</option>
									<option value="feedback">Feedback</option>
									<option value="melhorias">Melhorias</option>
									<option value="outros">Outros</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="field is-horizontal"></div>
			<div class="field">
				<label class="label">E-mail</label>
				<div class="control">
					<input
						class="input"
						type="email"
						placeholder="(Opcional)"
						v-model="email"
					/>
				</div>
			</div>
			<div class="field">
				<label class="label">Mensagem</label>
				<div class="control">
					<textarea class="textarea" v-model="mensagem"></textarea>
				</div>
			</div>
			<div class="field">
				<div class="control">
					<button class="button is-primary" type="submit">
						<i class="fa-solid fa-paper-plane"></i>
					</button>
				</div>
			</div>
		</form>
	</section>
</template>

<script>
import axios from 'axios';
	export default {
		data() {
			return {
				nome: "",
				email: "",
				assunto: "",
				mensagem: "",
			};
		},
		methods: {
			enviarFormulario() {
				const mensagem = {
					nome: this.nome,
					email: this.email,
					tipo: this.assunto,
					mensagem: this.mensagem,
				};

				axios
					.post("https://bnf-api-3560514cdc34.herokuapp.com/mensagens", mensagem)
					.then((response) => {
						console.log("Formulário enviado com sucesso");
						console.log("Resposta do servidor:", response.data);
						// Limpar os campos do formulário
						this.nome = "";
						this.email = "";
						this.assunto = "";
						this.mensagem = "";
					})
					.catch((error) => {
						console.error("Erro ao enviar formulário:", error);
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	/* Estilos específicos do componente */
	.select select:not([multiple]) {
		padding-right: 8.5em;
		border: none;
		border-bottom: 1px solid #1b3c1d;
		box-shadow: none !important;
		border-radius: 0;
	}
	.flex-field {
		display: flex;

		justify-content: space-between;
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
	}

	@media (max-width: 700px) {
		.select select:not([multiple]) {
			padding-right: 15rem;
		}
		.control {
			text-align: left;
		}
		.flex-field {
			display: block;
		}
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
