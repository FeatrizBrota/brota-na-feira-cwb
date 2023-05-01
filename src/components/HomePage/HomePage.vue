<template>
    <div>
<h1>Home da Bia</h1>
<MenuLateral></MenuLateral>
<CalendarioHorizontal></CalendarioHorizontal>
<ListagemFeiras></ListagemFeiras>
    </div>
</template>

<script>
import CalendarioHorizontal from '../CalendarioHorizontal/CalendarioHorizontal.vue';
import MenuLateral from '../MenuLateral/MenuLateral.vue';
import ListagemFeiras from '../Feiras/ListagemFeiras.vue';

export default {
    name: "HomePage",
    components: { MenuLateral, CalendarioHorizontal,ListagemFeiras, }
}
</script>

<style lang="scss" scoped>

</style>