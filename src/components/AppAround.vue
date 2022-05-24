<template>
	<section class="around">
		<h2>Intressanta platser i närområdet.</h2>
		<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J_aOQxwxTyj46yjsYvY6KiLEbxnU81aL&ehbc=2E312F"></iframe>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/imports";
.around {
	max-width: 1000px;
	height: 100%;
	display: grid;
	grid-template-rows: max-content auto max-content;
	grid-template-columns: 100%;
	justify-content: center;
	margin: auto;
	gap: 1rem;
	h2 {
		text-align: center;
	}
	iframe {
		width: 100%;
		height: 100%;
		margin: auto;
		border-radius: 10px;
		box-shadow: 3px 3px 10px black;
	}
}
</style>
