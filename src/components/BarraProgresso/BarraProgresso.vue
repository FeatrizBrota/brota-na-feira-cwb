<template>
  <div class="progresso">
    <progress class="progress is-primary" :value="progresso" max="100">{{ progresso }}%</progress>

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
      progresso: 0
    }
  },
  mounted() {
    setInterval(() => {
      const inicio = new Date(this.dataInicio).getUTCHours();
      const fim = new Date(this.dataFim).getUTCHours();

      const agora = new Date().toLocaleString('pt-BR', { hour: 'numeric' });
    
      const duracao = fim - inicio;

      const decorrido = agora - inicio;

    

      if (duracao <= 0) {
        this.progresso = 100; // Feira já terminou
      } else {
        this.progresso = Math.min(100, Math.round(decorrido / duracao * 100)); // Limita o progresso a 100%
      }
    }, 1000);

  }
};
</script>
  
<style scoped>
.progresso {
  margin-top: 20px;
}
</style>
  