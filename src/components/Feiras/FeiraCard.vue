
<template>
    <div class="card card-feira">
      <div class="card-content">
        <div class="content">
          <h1 class="title">{{ feira.nome }}</h1>
          <h2 class="subtitle">{{ feira.bairro }}</h2>
          <BarraProgresso :dataInicio="feira.horario_inicial" :dataFim="feira.horario_final" ></BarraProgresso>
         
        </div>
      </div>
    </div>
  </template>
  
<script>
import BarraProgresso from '../BarraProgresso/BarraProgresso.vue';

export default {
    name: 'FeiraCard',
    components:{BarraProgresso},
    props: {
        feira: {type: Object  },
        index: { type: Number, default: -1 }
    },
    data() {
        return {
    
        }
    },
    created() {
    },
    methods: {
    }
};
</script>

<style scoped>
.card-feira {
    border: 2px solid aquamarine;
}
</style>
