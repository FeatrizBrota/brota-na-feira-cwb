<template>
    <div class="calendario-horizontal">
      <div class="dias">
        <div v-for="(dia, index) in dias" :key="index" :class="{ ativo: index === diaSelecionado }" class="has-text-weight-bold" @click="selecionarDia(index)">
          {{ dia }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CalendarioHorizontal',
    data() {
      return {
        dias: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        dataAtual: '',
        diaSelecionado: '',
      }
    },
    created() {
      this.dataAtual = new Date();
      this.diaSelecionado = this.dataAtual.getDay();
    },
    watch:{
      diaSelecionado(){
        this.$emit('dia-selecionado', this.diaSelecionado);
      }

    },
    methods: {
      avancarDia() {
        if (this.diaSelecionado < 6) {
          this.diaSelecionado++;
        } else {
          this.diaSelecionado = 0;
        }
      },
      voltarDia() {
        if (this.diaSelecionado > 0) {
          this.diaSelecionado--;
        } else {
          this.diaSelecionado = 6;
        }
      },
      selecionarDia(index) {
        this.diaSelecionado = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .calendario-horizontal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 50px;
  }
  
  .calendario-horizontal .dias {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    overflow-x: hidden;
  }
  
  .calendario-horizontal .dias div {
    width: 50px;
    height: 50px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
  }
  
  .calendario-horizontal .dias div.ativo {
    background-color: #3498db;
    color: #fff;
  }
  </style>
  