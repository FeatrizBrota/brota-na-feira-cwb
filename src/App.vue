<template>
  <div>
    <RouterView>

</RouterView>
    <MenuBarra></MenuBarra>
  </div>

</template>

<script>

import MenuBarra from './components/MenuBarra/MenuBarra.vue';



export default {
  name: 'App',
  components: {
    MenuBarra
}
}
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
</style>
