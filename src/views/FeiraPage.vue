<template>
    <div>
      <h1> OI BIA</h1>
      <p>Feira ID: {{ feiraId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "FeiraPage",
    components: {},
    data() {
      return {
        feiraId: null,
      };
    },
    created() {
      // Obtenha o parâmetro feiraId da URL
      this.feiraId = this.$route.query.feiraId;
    },
  };
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
  }
  </style>
  