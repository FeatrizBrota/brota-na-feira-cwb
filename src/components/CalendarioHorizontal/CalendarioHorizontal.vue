<template>
    <div class="calendario-horizontal">
        <div class="seta esquerda" @click="voltarDia">
            </div>
                <div class="dias">
                    {{ diaSelecionado }}
                    <div v-for="(dia, index) in dias" :key="index" :class="{ ativo: index === diaSelecionado }">
                        {{ dia }}
                    </div>
                </div>
                <div class="seta direita" @click="avancarDia">></div>
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
  