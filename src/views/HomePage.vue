<template>
  <section class="home-page">
    <HeaderPrincipal></HeaderPrincipal>
    <div class="container">
      <SearchInput @search="updateSearchQuery"></SearchInput>
      <CalendarioHorizontal @diaSelecionado="receberDiaSelecionado"></CalendarioHorizontal>
      <ListagemFeiras :diaSel="diaSelecionado" :searchQuery="searchQuery"></ListagemFeiras>
    </div>
  </section>
</template>

<script>
import CalendarioHorizontal from '../components/CalendarioHorizontal/CalendarioHorizontal.vue';
import ListagemFeiras from '../components/Feiras/ListagemFeiras.vue';
import SearchInput from '../components/SearchInput/SearchInput.vue';
import HeaderPrincipal from '../components/HeaderPrincipal/HeaderPrincipal.vue';

export default {
  name: "HomePage",
  components: { CalendarioHorizontal, ListagemFeiras, HeaderPrincipal, SearchInput },
  data() {
    return {
      diaSelecionado: -1,
      searchQuery: ''
    };
  },
  methods: {
    receberDiaSelecionado(dia) {
      this.diaSelecionado = dia;
    },
    updateSearchQuery(query) {
      this.searchQuery = query;
    }
  }
};
</script>

<style scoped>
.container {
  min-height: 100vh;
}
</style>
