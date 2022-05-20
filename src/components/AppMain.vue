<template>
	<main>
		<AppAttraktioner v-if="state === 'attraktioner'" />
		<section v-else-if="state === 'restaurang'">Restaurang</section>
		<section v-else-if="state === 'närområde'">Intressanta platser i närområdet.</section>
		<section v-else>Välkommen till oss. Våra öppentider är 08:30 till 20:00</section>
		<aside ref="aside">
			<AppAside />
		</aside>
		<section class="overlay" ref="overlay"></section>
	</main>
</template>

<script>
import AppAttraktioner from "./AppAttraktioner.vue";
import AppAside from "./AppAside.vue";
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
	components: { AppAttraktioner, AppAside },
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
