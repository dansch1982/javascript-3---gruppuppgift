<template>
	<main>
		<aside v-if="showSchedule">Schedule</aside>
		<section v-if="showSchedule" class="overlay"></section>
	</main>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toggleSchedule() {
			this.schedule = !this.schedule;
		},
	},
	props: {
		showSchedule: Boolean(),
	},
};
</script>

<style lang="scss" scoped>
@import "../style/imports";
main {
	height: 100%;
	position: relative;
	aside {
		z-index: 20;
		background-color: aqua;
		height: 100%;
		width: 30%;
		min-width: fit-content;
		max-width: 400px;
		padding: 1rem;
		top: 0;
		right: 0;
		position: absolute;
	}

	.overlay {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba($color: #000000, $alpha: 0.4);
		width: 100%;
		height: 100%;
	}
}
</style>
