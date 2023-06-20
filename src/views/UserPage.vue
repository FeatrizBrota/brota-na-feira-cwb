<template>
    <div>

<LoginPage/>
      </div>

  </template>
  
  <script>
import LoginPage from '../components/Login/LoginPage.vue';

  
  export default {
    name: "UserPage",
    components: { LoginPage },
    data() {
      return {

      };
    },
    methods: {

    }
  };
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
    width: 100%;
  }
  
  </style>
  