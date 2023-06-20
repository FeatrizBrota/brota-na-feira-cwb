<template>
	<aside class="menu">
		<div class="logo-container">
			<img src="images/logo.png" alt="Logo Brota na Feira" class="logo-img" />
		</div>
		<ul class="menu-list">
			<li @click="goTo('HomePage')" >
				<i class="mobile-option fas fa-shopping-cart"></i>
				<span class="web-option">Feiras</span>
			</li>
			<li @click="goTo('UserPage')">
				<i class="mobile-option fas fa-user"></i>
				<span class="web-option">Perfil</span>
			</li>
			<li @click="goTo('ColaborePage')">
				<i class="mobile-option fas fa-handshake"></i>
				<span class="web-option">Colabore</span>
			</li>
		</ul>
	</aside>
</template>

<script>
	export default {
		name: "MenuLateral",
    methods:{
      goTo(route) {
        this.$router.push({ name: route });
      },
    }
	};
</script>

<style lang="scss" scoped>
	.menu {
		position: fixed;
		width: 250px;
		background-color: #b7d739;
		height: 100%;
	}

	.menu-list li {
		padding: 10px;
		list-style: none;
		font-size: 24px;
		cursor: pointer;
	}
	.menu-list li {
		position: relative;
		padding: 10px;
		list-style: none;
		font-size: 24px;
		cursor: pointer;
	}
	.menu-list li:hover {
		font-weight: bold;
	}

	.menu-list li::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 3px;
		background-color: #1e4507;
		transition: width 0.3s ease-in-out;
	}

	.menu-list li:hover::before {
		width: 100%;
	}

	.mobile-option {
		display: none;
	}

	@media screen and (max-width: 768px) {
		.menu {
			width: 100%;
			display: inline-block;
			position: relative;
			justify-content: space-between;
			align-items: center;
			border-radius: 0 0 40px 0px;
			padding: 0 10px;
		}

		.menu-list {
			display: flex;
			justify-content: space-around;
			width: 100%;
			padding: 10px 0;
			margin: 0;
		}

		.menu-list li {
			list-style: none;
			font-size: 24px;
			cursor: pointer;
		}

		.web-option {
			display: none;
		}

		.mobile-option {
			display: inline-block;
		}
	}

	.logo-container img {
		padding: 20px;
		width: 50%;
		max-width: 150px;
	}
</style>
