<template>
  <div class="progresso">
    <span class="horarios"> {{ inicio }} - {{ fim }}</span>
    <div class="barra-wrapper">
      <div class="barra" :style="{ width: progresso + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarraProgresso',
  props: {
    dataInicio: {
      type: String,
      required: true
    },
    dataFim: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      progresso: 0,
      inicio: '',
      fim: ''
    };
  },
  mounted() {
    setInterval(() => {
      const inicioHoras = parseInt(this.dataInicio);
      const fimHoras = parseInt(this.dataFim);

      const agora = new Date().getHours();

      const duracao = fimHoras - inicioHoras;

      const decorrido = agora - inicioHoras;

      if (duracao <= 0) {
        this.progresso = 100; // Feira já terminou
      } else {
        this.progresso = Math.min(100, Math.round((decorrido / duracao) * 100)); // Limita o progresso a 100%
      }

      this.inicio = this.dataInicio;
      this.fim = this.dataFim;
    }, 1000);
  }
};
</script>

<style scoped>
.progresso {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
}

.barra-wrapper {
  width: 50%;
  height: 10px;
  border-radius: 5px;
  background-color: #ddd;
}

.horarios {
  font-size: 1.2em;
}

.barra {
  height: 100%;
  background-color: #FF8300;
  border-radius: 5px;
  transition: width 0.3s;
}
</style>
