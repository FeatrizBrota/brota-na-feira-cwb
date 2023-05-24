<template>
  <div>

    <HomePage></HomePage>
  </div>

</template>

<script>
import HomePage from './components/HomePage/HomePage.vue';



export default {
  name: 'App',
  components: {
    HomePage
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
}
</style>
