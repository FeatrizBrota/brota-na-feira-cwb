<template>
  <div>
    <RouterView></RouterView>
    <MenuLateral class="web-menu"></MenuLateral>
    <MenuBarra class="mobile-menu"></MenuBarra>
  </div>
</template>

<script>
import MenuBarra from './components/MenuBarra/MenuBarra.vue';
import MenuLateral from './components/MenuLateral/MenuLateral.vue';

export default {
  name: 'App',
  components: {
    MenuBarra,
    MenuLateral
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

.web-menu {
  display: none;
}

@media only screen and (min-width: 768px) {
  .web-menu {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
