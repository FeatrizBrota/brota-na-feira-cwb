<template>
    <div class="menu-principal">
        <div class="logo-container">
      <!-- <div class="menu-options" :class="{ 'menu-open': isMenuOpen }">
        <ul>
          <li style="z-index: 1;">Feiras Favoritas</li>
          <li style="z-index: 1;">Meu Perfil</li>
          <li style="z-index: 1;">Colabore</li>
        </ul>
      </div>
      <div class="menu-burger" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div> -->

        <img src="images/logo.png" alt="Logo Brota na Feira" class="logo-img">
      </div>
    </div>
  </template>

<script>


export default {
    name: "HeaderPrincipal",
    components: { },
    data() {
        return {
            isMenuOpen: false

        }

    },
    methods: {
        toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
    }
    
</script>

<style scoped>
.menu-principal {
  display: flex;
  align-items: center;
  padding: 30px;
  background-color: #B7D739;
}

.logo-container {
    flex: 1;
    text-align: center;

}

.logo-img {
width: 10%;
}

.menu-options {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  padding: 20px;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1;
}

.menu-open {
  transform: translateX(0%);
}

.menu-options ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu-options li {
  margin-bottom: 10px;
  cursor: pointer;
}

.menu-burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
  z-index: 2;
  margin-left: 10px;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: #333;
}
</style>