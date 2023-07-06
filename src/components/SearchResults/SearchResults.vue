<template>
    <div v-if="searchQuery" class="text">
      Exibindo resultados para: {{ searchQuery }}
      <i @click="limpar" class="fa-solid fa-circle-xmark"></i>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchResults",
    props: {
      searchQuery: {
        type: String,
        required: true,
      },
    },
    methods:{
      limpar(){
        this.$emit("clear-search", "");
        const routeParams = { tag: "" };
        this.$router.push({ name: "HomePage", params: routeParams });

      }
    }
  };
  </script>
  <style>
.text{
  font-weight: 600;
  text-align: left;
  margin:10px 35px;
  color:rgb(94, 93, 93)
}

i {
  color: #1b3c1d;
  font-size: 18px;
 
}

i:hover {
  cursor: pointer;
  color: #FF8300;

}
</style>
  