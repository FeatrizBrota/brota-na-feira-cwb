<template>
  <div>
    <CalendarioHorizontal @diaSelecionado="receberDiaSelecionado"></CalendarioHorizontal>
    <div v-if="feiras[diaSel] && feiras[diaSel].length > 0">
      <div v-for="(feira, index) in feiras[diaSel]" :key="index" @click="navegarParaFeira(feira)">
        <FeiraCard :feira="feira" :index="index"></FeiraCard>
      </div>
    </div>
    <div v-else class="box">
      Nenhuma feira disponível hoje
    </div>
  </div>
</template>

<script>
import CalendarioHorizontal from '../CalendarioHorizontal/CalendarioHorizontal.vue';
import FeiraCard from './FeiraCard.vue';

export default {
  data() {
    return {
      diaSel: Number,
    };
  },
  props: {
    feiras: {}
  },
  components: {
    CalendarioHorizontal,
    FeiraCard
  },
  methods: {
    receberDiaSelecionado(dia) {
      this.diaSel = dia;
    },
    navegarParaFeira(feira) {
      this.$router.push({ path: '/feira', query: { feiraId: feira.nome } });
    }
  }
};
</script>
