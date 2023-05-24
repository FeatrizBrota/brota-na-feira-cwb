<template>
    <div class="container">
      <div v-for="(feira, index) in filteredFeiras" :key="index">
        <FeiraCard :feira="feira" :index="index"></FeiraCard>
      </div>
  
      <div v-if="filteredFeiras.length === 0 && feiras[diaSel] !== undefined" class="box">
        Nenhuma feira disponível hoje
      </div>
    </div>
  </template>
  
  <script>
  import FeiraCard from './FeiraCard.vue';
  import axios from 'axios';
  
  export default {
    name: 'ListagemFeiras',
    components: {
      FeiraCard,
    },
    props: {
      diaSel: Number,
      searchQuery: String,
    },
    data() {
      return {
        feiras: {},
      };
    },
    created() {
      this.dataAtual = new Date();
      this.diaSelecionado = this.dataAtual.getDay();
    },
    mounted() {
      this.listarFeiras();
    },
    computed: {
      filteredFeiras() {
        if (this.feiras[this.diaSel] === undefined) {
          return [];
        }
  
        return this.feiras[this.diaSel].filter(feira =>
          feira.nome.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      listarFeiras() {
        axios
          .get('http://localhost:3000/feiras', {
            timeout: 5000,
          })
          .then(response => {
            const feirasPorDia = {
              0: [], // domingo
              1: [], // segunda
              2: [], // terça
              3: [], // quarta
              4: [], // quinta
              5: [], // sexta
              6: [], // sábado
            };
  
            response.data.forEach(feira => {
              feirasPorDia[feira.dia_da_semana].push(feira);
            });
  
            this.feiras = feirasPorDia;
          })
          .catch(error => {
            console.log(error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin: 10px;
  }
  
  .box {
    margin-top: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 4px;
    text-align: center;
  }
  </style>
  