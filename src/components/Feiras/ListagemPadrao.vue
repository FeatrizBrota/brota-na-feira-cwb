<template>
  <div>
    <CalendarioHorizontal  :selectedDay="selectedDay" @diaSelecionado="receberDiaSelecionado"></CalendarioHorizontal>
    <div v-if="feiras[diaSel] && filteredFeiras.length > 0">
      <div v-for="(feira, index) in filteredFeiras" :key="index" @click="navegarParaFeira(feira)">
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
    feiras: {},
    filtro_tipo: {
    type: String, // Definindo o tipo de propriedade como String
  },
  selectedDay:String
  },
  components: {
    CalendarioHorizontal,
    FeiraCard
  },
  computed:{
    filteredFeiras() {
				if (this.feiras[this.diaSel] === undefined) {
					return [];
				}

        if (this.filtro_tipo == '') {
					return this.feiras[this.diaSel];
				}

				var filtro = this.feiras[this.diaSel]
				if(this.filtro_tipo.length != 0 ){
					filtro =filtro.filter((feira)=>
					feira.tipo.includes(this.filtro_tipo))

				}
				return filtro
				
			
			},
    
  },
  methods: {
    receberDiaSelecionado(dia) {
      this.diaSel = dia;
    },
    navegarParaFeira(feira) {
      this.$router.push({ path: '/feira', query: { feiraId: feira._id } });
    }
  }
};
</script>
