<template>
    <div class="card-feira">
        <h1> Nome: {{ feira.nome }}</h1>
        <h2> Bairro: {{ feira.bairro }}</h2>
        <div>
            <h3> Horario: {{ feira.horario_inicial }} </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeiraCard',
    props: {
        feira: {type: Object  },
        index: { type: Number, default: -1 }
    },
    data() {
        return {
    
        }
    },
    created() {
    },
    methods: {
    }
};
</script>

<style scoped>
.card-feira {
    border: 2px solid aquamarine;
}
</style>
