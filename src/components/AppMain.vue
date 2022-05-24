<template>
	<main>
		<AppAttraktioner v-if="state === 'attraktioner'" />
		<AppRestaurang v-else-if="state === 'restaurang'" />
		<AppAround  v-else-if="state === 'närområde'" />
		<AppHome v-else />
		<aside ref="aside">
			<AppAside />
		</aside>
		<section class="overlay" ref="overlay"></section>
	</main>
</template>

<script>
import AppAttraktioner from "./AppAttraktioner.vue";
import AppAside from "./AppAside.vue";
import AppRestaurang from "./AppRestaurang.vue";
import AppHome from "./AppHome.vue";
import AppAround from "./AppAround.vue";
export default {
	data() {
		return {};
	},
	mounted() {},
	watch: {
		showSchedule: {
			handler: function () {
				this.$refs.aside.classList.toggle("open");
				this.$refs.overlay.classList.toggle("opacity-100");
				this.$refs.overlay.classList.toggle("z-index-10");
			},
		},
	},
	methods: {},
	props: {
		showSchedule: Boolean,
		state: String,
	},
	components: { AppAttraktioner, AppAside, AppRestaurang, AppHome, AppAround },
};
</script>

<style lang="scss" scoped>
@import "@/style/imports";
main {
	height: 100%;
	position: relative;
	padding: 1rem 2rem;
	overflow: auto;
	aside {
		display: flex;
		justify-content: center;
		z-index: 20;
		background-color: $primary;
		height: 100%;
		width: 0%;
		max-width: 400px;
		top: 0;
		right: 0;
		position: absolute;
		overflow: auto;
		transition: 0.2s;
	}
	.open {
		width: 30%;
		min-width: max-content;
	}
}
</style>
