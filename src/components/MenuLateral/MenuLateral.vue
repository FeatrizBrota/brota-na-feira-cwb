<template>
	<div>
		<div class="menu-bar">
			<i class="mobile-option fas fa-bars" @click="toggleMenu"></i>
		</div>
		<aside class="menu" :class="{ 'is-active': isMenuOpen }">
			<div class="logo-container">
				<img src="images/logo.png" alt="Logo Brota na Feira" class="logo-img" />
			</div>
			<ul class="menu-list">
				<li @click="goTo('HomePage')">
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
	</div>
</template>

<script>
	export default {
		name: "MenuLateral",
		data() {
			return {
				isMenuOpen: false,
			};
		},
		methods: {
			goTo(route) {
				this.$router.push({ name: route });
				this.closeMenu();
			},
			toggleMenu() {
				this.isMenuOpen = !this.isMenuOpen;
			},
			closeMenu() {
				this.isMenuOpen = false;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.menu-bar {
		display: none;
	}

	@media screen and (max-width: 1023px) {
		.menu-bar {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 10px;
			background-color: #b7d739;
		}

		.menu-bar i {
			font-size: 24px;
			color: #1e4507;
			cursor: pointer;
		}

		.menu {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: #b7d739;
			transform: translateX(-100%);
			transition: transform 0.3s ease-in-out;
			z-index: 1000;
		}

		.menu.is-active {
			transform: translateX(0);
		}

		.menu-list {
			margin-top: 20px;
			padding-left: 0;
		}

		.menu-list li {
			padding: 10px;
			list-style: none;
			font-size: 24px;
			cursor: pointer;
			position: relative;
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
			display: inline-block;
			margin-right: 10px;
		}

		.web-option {
			display: none;
		}

		.logo-container img {
			padding: 20px;
			width: 50%;
			max-width: 150px;
		}
	}
</style>
