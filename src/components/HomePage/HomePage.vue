<template>
    <div>
<HeaderPrincipal></HeaderPrincipal>
        <div class="container">
  
        <input class="input is-rounded" type="text" placeholder="Rounded input">
        <CalendarioHorizontal @diaSelecionado="receberDiaSelecionado"></CalendarioHorizontal>
        <ListagemFeiras :diaSel="diaSelecionado"></ListagemFeiras>
    </div>
    </div>

</template>

<script>
import CalendarioHorizontal from '../CalendarioHorizontal/CalendarioHorizontal.vue';
//import MenuLateral from '../MenuLateral/MenuLateral.vue';
import ListagemFeiras from '../Feiras/ListagemFeiras.vue';
import HeaderPrincipal from '../HeaderPrincipal/HeaderPrincipal.vue';

export default {
    name: "HomePage",
    components: { CalendarioHorizontal, ListagemFeiras, HeaderPrincipal },
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