<template>
	<div>
		<div v-if="feiras && feiras.length > 0">
			<FeiraCard
				v-for="(feira, index) in feiras"
				:key="index"
				:feira="feira"
				:tipo="'busca'"
				:index="index"
			></FeiraCard>
		</div>
		<div v-else class="box sem-resultados">Nenhuma feira encontrada</div>
	</div>
</template>

<script>
	import FeiraCard from "./FeiraCard.vue";

	export default {
		data() {
			return {
				diaSel: Number,
			};
		},
		props: {
			feiras: {},
		},
		components: {
			FeiraCard,
		},
		methods: {

		},
	};
</script>
<style scoped>
.sem-resultados{
	margin-top: 15px;
}

</style>
