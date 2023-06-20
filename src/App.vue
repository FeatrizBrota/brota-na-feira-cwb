<!-- <template>
  <div :class="containerClass">
    <div class="web-menu-container">
      
    </div>
    <div class="router-view-container">
    
    </div>
    <MenuBarra class="mobile-menu"></MenuBarra>
  </div>
</template> -->


<template>
  <div class="columns">
    <div class="column is-one-fifth">
      <MenuLateral></MenuLateral>
    </div>
    <div class="column">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
// import MenuBarra from './components/MenuBarra/MenuBarra.vue';
import MenuLateral from './components/MenuLateral/MenuLateral.vue';

export default {
  name: 'App',
  components: {
    // MenuBarra,
    MenuLateral
  },
  computed: {
    containerClass() {
      return {
        'grid-container': this.isWeb,
        'flex-container': !this.isWeb
      };
    },
    isWeb() {
      return window.matchMedia("(min-width: 768px)").matches;
    }
  }
};
</script>

<style>
@import './assets/styles/variables.scss';
#app {
  font-family: 'Raleway', sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f3f3;
  max-height: 100%;
  /* padding-bottom: 100px; Define uma margem inferior para reservar espaço para o menu bar */
}

.is-one-fifth{
  /* width: 0 !important; */
  width: 15% !important;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.web-menu-container {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 15%;
  background-color: #f2f2f2;
  z-index: 1;
}

.router-view-container {
  flex: 1;
}

@media only screen and (min-width: 768px) {
  .web-menu-container {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
