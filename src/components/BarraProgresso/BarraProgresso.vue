<template>
  <div class="progresso">
    <span v-if="!dadosCarregados" class="horarios skeleton-loading"></span>
    <span v-else class="horarios">{{ inicio }} - {{ fim }}</span>
    <div class="barra-wrapper">
      <div v-if="!dadosCarregados" class="loading-bar"></div>
      <div v-else class="barra" :style="{ width: progresso + '%' }"></div>
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
      fim: '',
      dadosCarregados: false
    };
  },
  mounted() {
    this.carregarDados();
  },
  methods: {
    async carregarDados() {
      // Simulando um atraso de 2 segundos para carregar os dados
      await new Promise((resolve) => setTimeout(resolve, 2000));

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

      this.dadosCarregados = true;
    }
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
  position: relative;
}

.skeleton-loading {
  display: inline-block;
  height: 1em;
  width: 80px;
  background-color: #ddddddb2;
  border-radius: 5px;
}


.horarios {
  font-size: 1.2em;
  
}

.loading-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #dddddde5;
  border-radius: 5px;
}
.barra {
  height: 100%;
  background-color: #FF8300;
  border-radius: 5px;
  transition: width 0.3s;
}

@keyframes loadingAnimation {
  0% {
    width: 10%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
</style>
