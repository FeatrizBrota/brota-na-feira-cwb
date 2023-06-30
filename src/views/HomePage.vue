<template>
  <section class="home-page">
    <div class="container">
      <SearchInput @search="updateSearchQuery"></SearchInput>
      <ListagemFeiras :searchQuery="searchQuery" :tag="tag"></ListagemFeiras>
    </div>
  </section>
</template>

<script>
import ListagemFeiras from "../components/Feiras/ListagemFeiras.vue";
import SearchInput from "../components/SearchInput/SearchInput.vue";

export default {
  name: "HomePage",
  components: { ListagemFeiras, SearchInput },
  data() {
    return {
      searchQuery: "",
      tag: null,
    };
  },
  watch: {
    '$route.params': {
      immediate: true,
      deep: true,
      handler(newParams, oldParams) {
        if (newParams && newParams.tag) {
          const newTag = newParams.tag;
          const oldTag = oldParams ? oldParams.tag : null;

          // Verificar se a tag é uma string de um número
          const tagIsNumberString = /^\d+$/.test(newTag);

          if (tagIsNumberString) {
            this.tag = newTag; // Salvar em this.tag se for uma string de um número
          } else {
            this.searchQuery = newTag; // Salvar em this.searchQuery caso contrário
          }

          // Faça o que mais você precisa fazer com a tag
          console.log(`Novo valor do parâmetro 'tag': ${newTag}`);
          console.log(`Valor anterior do parâmetro 'tag': ${oldTag}`);
        }
      },
    },
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.tag = this.$route.params.tag;
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    updateSearchQuery(query) {
      this.searchQuery = query;
    },
  },
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
