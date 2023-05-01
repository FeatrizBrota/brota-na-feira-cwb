<template>
    <div >
       <h1>Listagem de Feiras</h1>
       
       <div v-for="(feira, index) in feiras" :key="index">
        <FeiraCard :feira="feira" :index="index"></FeiraCard> 
    </div>
       
        </div>
</template>
  
<script>
import FeiraCard from './FeiraCard.vue';
export default {
    name: 'ListagemFeiras',
    components:{
        FeiraCard,
    },
    data() {
        return {
            feiras: [{"_id":{"$oid":"642a1f932a742c006bd5d3f0"},"nome":"Feira inicial","bairro":"Cristo Rei","tipo":["matutino"],"dia_da_semana":{"$numberDecimal":"6"},"horario_inicial":{"$date":{"$numberLong":"1680444000000"}},"horario_final":{"$date":{"$numberLong":"1680458400000"}}}],



        }

    },
    created() {
        this.dataAtual = new Date();
        this.diaSelecionado = this.dataAtual.getDay();

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
        }




    }
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

.calendario-horizontal .seta {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #f0f0f0;
    border-radius: 50%;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
}

.calendario-horizontal .esquerda {
    left: 0;
}

.calendario-horizontal .direita {
    right: 0;
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
    border-radius: 50%;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    margin: 0 10px;
    cursor: pointer;
}

.calendario-horizontal .dias div.ativo {
    background-color: #3498db;
    color: #fff;
}
</style>
  