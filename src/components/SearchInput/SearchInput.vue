<template>
    <div class="search-input">
      <input type="text" v-model="searchQuery" @input="performSearch" placeholder="Encontre feirinhas...">
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchInput",
    components: { },
    data() {
      return {
        searchQuery: ''
      };
    },
    methods: {
      performSearch() {
        this.$emit('search', this.searchQuery); 
      }
    }
  };
  </script>
  
  <style scoped>
  .search-input {
    display: flex;
    align-items: center;

    margin-top: -30px;
  }
  
  input[type="text"] {
    padding: 12px 22px;
    margin: 0 30px;
    color: #1B3C1D;
    border: 1px solid #cccccc41;
    box-shadow: 3px 6px #cccccc15;
    border-radius: 4px;
    font-size: 16px;
    flex: 1;
  }
  </style>
  