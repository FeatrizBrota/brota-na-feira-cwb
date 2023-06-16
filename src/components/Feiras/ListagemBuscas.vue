<template>
	<div>
		<div v-if="feiras && feiras.length > 0">
			<div
				v-for="(feira, index) in feiras"
				:key="index"
				@click="navegarParaFeira(feira)"
			>
				<FeiraCard :feira="feira" :index="index"></FeiraCard>
			</div>
		</div>
		<div v-else class="box">Nenhuma feira encontrada</div>
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
			navegarParaFeira(feira) {
				this.$router.push({ path: "/feira", query: { feiraId: feira._id } });
			},
		},
	};
</script>
