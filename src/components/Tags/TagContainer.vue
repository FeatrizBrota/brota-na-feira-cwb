<template>
	<div class="tag-container">
		<div class="tag-scroll">
			<div class="tags">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.tag-container {
		width: 100%;
		overflow-x: auto;
	}



	.tags {
		display: flex;
		flex-wrap: nowrap;
		padding: 8px;
		
	}
    .tags:last-child{
        margin-bottom: 0;
    }
</style>

<script>
	export default {
		name: "TagContainer",
	};
</script>
