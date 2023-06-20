<template>
  <section class="home-page">
    <div class="container" :class="{ 'web-margin': isWeb }">
      <SearchInput @search="updateSearchQuery"></SearchInput>
      <ListagemFeiras :searchQuery="searchQuery"></ListagemFeiras>
    </div>
  </section>
</template>

<script>
import ListagemFeiras from '../components/Feiras/ListagemFeiras.vue';
import SearchInput from '../components/SearchInput/SearchInput.vue';
// import HeaderPrincipal from '../components/HeaderPrincipal/HeaderPrincipal.vue';

export default {
  name: "HomePage",
  components: {  ListagemFeiras, SearchInput },
  data() {
    return {
      searchQuery: '',
      isWeb: false
    };
  },
  mounted() {
    this.isWeb = this.checkIfWeb();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query;
    },
    checkIfWeb() {
      const mq = window.matchMedia("(min-width: 768px)");
      return mq.matches;
    },
    handleResize() {
      this.isWeb = this.checkIfWeb();
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding-bottom: 30px;
}

.web-margin {
  padding-top: 50px;
}

@media (max-width: 767px) {
  .web-margin {
    margin-top: 0;
  }
}
</style>
