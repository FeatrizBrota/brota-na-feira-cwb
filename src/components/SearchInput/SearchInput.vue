<template>
  <div class="search-input" :class="{ 'mobile-margin': isMobileOrTablet }">
    <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Encontre feirinhas...">
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  data() {
    return {
      searchQuery: '',
      isMobileOrTablet: false
    };
  },
  mounted() {
    this.isMobileOrTablet = this.checkIfMobileOrTablet();
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    performSearch() {
      this.$emit('search', this.searchQuery); 
    },
    checkIfMobileOrTablet() {
      const mq = window.matchMedia("(max-width: 768px)");
      return mq.matches;
    },
    handleResize() {
      this.isMobileOrTablet = this.checkIfMobileOrTablet();
    }
  }
};
</script>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

input[type="text"] {
  padding: 12px 22px;
  margin: 0 30px;
  color: #1B3C1D;
  border: 2px solid #ff840056;
  box-shadow: 3px 6px #cccccc15;
  border-radius: 20px;
  font-size: 16px;
  flex: 1;
}



</style>
