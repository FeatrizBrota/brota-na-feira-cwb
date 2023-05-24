
<template>
    <div class="card card-feira">
      <div class="card-content">
        <div class="content">
          <div class="display-flex titulo-feira">
            <h1 class="title">{{ feira.nome }}</h1>
            <i class="fa-regular fa-heart"></i>
          </div>
          <div class="endereco-feira">
            <h2>{{ feira.endereco }}</h2>
          </div>
          <BarraProgresso :dataInicio="feira.horario_inicial" :dataFim="feira.horario_final" ></BarraProgresso>
          <div class="bairro-box">
            <span class="bairro">{{ feira.bairro }}</span>
          </div>
          
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
    margin-top:10px;

}

.titulo-feira h1{
  font-size: 1.2rem;
  text-align: left;
  margin: 0 !important;

}
.endereco-feira h2{
  font-size: 1rem;
  text-align: left;
  font-weight: 500;
  margin: 0 !important;
  margin-top: 5px !important;

}
.endereco-feira{
  align-items: center !important;
}

.bairro-box{
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
}
.bairro {
    background-color: #B7D739;
    color: #1B3C1D;
    margin: 0 !important ;
    padding: 5px;
    border-radius: 10px;
    font-size: 1rem;


}
.display-flex{
  display:flex;
  justify-content: space-between;
}
</style>
