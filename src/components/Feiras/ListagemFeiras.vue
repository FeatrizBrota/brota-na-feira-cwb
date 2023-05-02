<template>
    <div class="container">

        <div v-for="(feira, index) in feiras[diaSel]" :key="index">
            <FeiraCard :feira="feira" :index="index"></FeiraCard>
        </div>

    
            <div v-if="feiras[diaSel] == 0" class="box">
                Nenhuma feira disponível hoje
            </div>



        </div>
</template>
  
<script>
import FeiraCard from './FeiraCard.vue';
import axios from 'axios';
export default {
    name: 'ListagemFeiras',
    components: {
        FeiraCard,
    },
    props: {
        diaSel: Number
    },
    data() {
        return {
            feiras: [],



        }

    },
    created() {
        this.dataAtual = new Date();
        this.diaSelecionado = this.dataAtual.getDay();

    },
    mounted() {
        this.listarFeiras()
    },
    methods: {
        listarFeiras() {
            axios.get('http://localhost:3000/feiras', {
                timeout: 5000 // define um timeout de 5 segundos
            })
                .then(response => {
                    // cria um objeto com sete arrays, um para cada dia da semana
                    const feirasPorDia = {
                        0: [], // domingo
                        1: [], // segunda
                        2: [], // terça
                        3: [], // quarta
                        4: [], // quinta
                        5: [], // sexta
                        6: [], // sábado
                    };

                    // percorre as feiras e adiciona cada uma ao array correspondente ao seu dia_da_semana
                    response.data.forEach(feira => {
                        feirasPorDia[feira.dia_da_semana].push(feira);
                    });

                    // atribui as feiras obtidas à variável 'feiras' como um objeto com sete propriedades, uma para cada dia da semana
                    this.feiras = feirasPorDia;
                })
                .catch(error => {
                    console.log(error); // exibe o erro no console, se ocorrer
                });
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
  