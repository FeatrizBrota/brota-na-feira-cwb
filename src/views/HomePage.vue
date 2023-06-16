<template>
  <section class="home-page">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="container">
      <SearchInput @search="updateSearchQuery"></SearchInput>
      <ListagemFeiras :searchQuery="searchQuery"></ListagemFeiras>
    </div>
  </section>
</template>

<script>
import ListagemFeiras from '../components/Feiras/ListagemFeiras.vue';
import SearchInput from '../components/SearchInput/SearchInput.vue';
import HeaderPrincipal from '../components/HeaderPrincipal/HeaderPrincipal.vue';

export default {
  name: "HomePage",
  components: {  ListagemFeiras, HeaderPrincipal, SearchInput },
  data() {
    return {
     
      searchQuery: ''
    };
  },
  methods: {

    updateSearchQuery(query) {
      this.searchQuery = query;
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding-bottom: 30px;
}

</style>
