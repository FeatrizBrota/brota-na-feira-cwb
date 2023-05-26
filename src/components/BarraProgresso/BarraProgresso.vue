<template>
  <div class="progresso">
    <span>{{ inicio }} h - {{ fim }} h</span>
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
      this.inicio = new Date(this.dataInicio).getUTCHours();
      this.fim = new Date(this.dataFim).getUTCHours();

      const agora = new Date().toLocaleString('pt-BR', { hour: 'numeric' });

      const duracao = this.fim - this.inicio;

      const decorrido = agora - this.inicio;

      if (duracao <= 0) {
        this.progresso = 100; // Feira já terminou
      } else {
        this.progresso = Math.min(100, Math.round((decorrido / duracao) * 100)); // Limita o progresso a 100%
      }
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

.barra {
  height: 100%;
  background-color: #FF8300;
  border-radius: 5px;
  transition: width 0.3s;
}
</style>
