<template>
	<div class="tag-container">
		<div class="tag-scroll">
			<div class="tags">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style>
	.tag-container {
		width: 100%;
		/* overflow-x: auto; */
	}

	/* .tag-scroll {
    display: flex;
  } */

	.tags {
		display: flex;
		flex-wrap: nowrap;
		padding: 8px;
		cursor: pointer;
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
