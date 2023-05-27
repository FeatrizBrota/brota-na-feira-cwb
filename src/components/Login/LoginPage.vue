<template>
	<div class="container">
		<div class="title">
			<h1>Abriu Achou Brotou</h1>
			<p>
				Encontrar feiras nunca foi tão fácil! <br />
				Crie uma conta e compartilhe suas experiências, avalie feiras e desfrute
				de uma experiência personalizada.
			</p>
			<div class="btn-google-box">
				<div class="btn-google">
          <i class="fa-brands fa-google"></i>
					<span>Faça Parte</span>
				</div>
			</div>
		</div>
    
	</div>
</template>

<script>
	export default {
		name: "LoginPage",
		methods: {
			loginWithGoogle() {
				// Implemente a lógica de autenticação com o Google aqui
			},
		},
	};
</script>

<style scoped>
	.container {
		padding: 40px 15px;
		min-height: 100vh;
		background-color: #fff;
	}

	.btn-google-box {
		display: flex;
		justify-content: start;
		margin-top: 15px;
	}

	.btn-google {
		display: inline-block;
		background-color: #1b3c1d;
		padding: 20px 50px;
		border-radius: 15px;
		font-size: 1rem !important;
		font-family: "Raleway", sans-serif;
		text-transform: uppercase;
		color: #fcf3e6;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s, box-shadow 0.3s;
		cursor: pointer;
	}
  i{
    margin-right: 10px;
  }

	.btn-google:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
	}

	.btn-google:active {
		transform: scale(0.95);
		box-shadow: none;
	}

	.btn-google span {
		font-size: 1rem;
	}

	.title {
		color: #1b3c1d;
		margin: 50px 30px 50px 20px;
		text-align: start;
	}

	h1 {
		font-size: 4rem !important;
		font-weight: bold;
		text-transform: uppercase;
	}

	p {
		font-size: 1rem !important;
	}
</style>
