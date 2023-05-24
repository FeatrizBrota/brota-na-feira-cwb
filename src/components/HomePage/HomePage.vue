<template>
    <div>
      <HeaderPrincipal></HeaderPrincipal>
      <div class="container">
        <SearchInput @search="updateSearchQuery"></SearchInput>
        <CalendarioHorizontal @diaSelecionado="receberDiaSelecionado"></CalendarioHorizontal>
        <ListagemFeiras :diaSel="diaSelecionado" :searchQuery="searchQuery"></ListagemFeiras>
      </div>
    </div>
  </template>
  
  <script>
  import CalendarioHorizontal from '../CalendarioHorizontal/CalendarioHorizontal.vue';
  import ListagemFeiras from '../Feiras/ListagemFeiras.vue';
  import SearchInput from '../SearchInput/SearchInput.vue';
  import HeaderPrincipal from '../HeaderPrincipal/HeaderPrincipal.vue';
  
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
        this.searchQuery = query; // Atualizando a propriedade searchQuery com o valor da busca
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin: 10px;
  }
  </style>
  