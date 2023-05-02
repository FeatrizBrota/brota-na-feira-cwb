<template>
    <div class="container">
        <div class="notification is-info">
            <h1 class="title">Brota na Feira</h1>
            <p class="subtitle">Abriu Achou Brotou - aqui você descobe as melhores feiras da cidade!</p>
        </div>
        <CalendarioHorizontal @diaSelecionado="receberDiaSelecionado"></CalendarioHorizontal>
        <ListagemFeiras :diaSel="diaSelecionado"></ListagemFeiras>
    </div>
</template>

<script>
import CalendarioHorizontal from '../CalendarioHorizontal/CalendarioHorizontal.vue';
//import MenuLateral from '../MenuLateral/MenuLateral.vue';
import ListagemFeiras from '../Feiras/ListagemFeiras.vue';

export default {
    name: "HomePage",
    components: { CalendarioHorizontal, ListagemFeiras, },
    data() {
        return {
            diaSelecionado:-1,

        }

    },
    methods: {
        receberDiaSelecionado(dia) {
            this.diaSelecionado = dia;
  },
    }
    
}
</script>

<style  scoped>
.container{
    margin: 10px;
}

</style>