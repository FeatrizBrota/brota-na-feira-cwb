<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        <img src="images/logo.png" alt="Logo">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div class="navbar-menu" :class="{'is-active': isMenuOpen}">
      <div class="navbar-start">
        <a class="navbar-item"  @click="goTo('HomePage')" :class="{'is-active': activeItem === 'feiras'}">Feiras</a>
        <a class="navbar-item"  @click="goTo('ColaborePage')" :class="{'is-active': activeItem === 'colabore'}">Colabore</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      activeItem: null
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    goTo(route) {
      this.$router.push({ name: route });
      this.closeMenu();
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>


.navbar {
  margin-bottom: 2rem;
}

.navbar-brand .navbar-burger {
  color: #1B3C1D;
  background-color: #B7D739 !important;
}

.navbar-brand {
  color: #1B3C1D;
  background-color: #B7D739 !important;
}

.navbar-menu {
  background-color: #B7D739;
}

.navbar-start .navbar-item {
  color: #1B3C1D;
  transition: font-size 0.3s, color 0.3s;
}

.navbar-start .navbar-item:hover {
  color: #FF8300;
  font-size: 1.1rem;
  background-color: rgba(255, 255, 255, 0.616);
  cursor: pointer;
}

.navbar-start .navbar-item.is-active {
  background-color: #1B3C1D !important;
}

.navbar-start .navbar-item.is-active:hover {
  background-color: #1B3C1D !important;
}

.navbar-start .navbar-item:active {
  background-color: #1B3C1D !important;
}
</style>
