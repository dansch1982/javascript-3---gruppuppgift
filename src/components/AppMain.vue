<template>
	<main>
		<AppAttraktioner v-if="state === 'attraktioner'" />
		<section v-else-if="state === 'event'">Event</section>
		<section v-else-if="state === 'restaurang'">Restaurang</section>
		<section v-else>Hello</section>
		<aside ref="aside">
			<section id="section" class="section">Schedule</section>
		</aside>
		<section class="overlay" ref="overlay"></section>
	</main>
</template>

<script>
import AppAttraktioner from "./AppAttraktioner.vue";
export default {
    data() {
        return {};
    },
    mounted() {
        /* this.$refs.overlay.addEventListener("click", () => {
            this.$emit("closeSchedule")
        }); */
    },
    watch: {
        showSchedule: {
            handler: function () {
                this.$refs.aside.classList.toggle("open");
                this.$refs.overlay.classList.toggle("display-block");
            },
        },
    },
    props: {
        showSchedule: Boolean,
        state: String,
    },
    components: { AppAttraktioner }
};
</script>

<style lang="scss" scoped>
@import "../style/imports";
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
		overflow: hidden;
		transition: 0.2s;
		section {
			padding: 1rem;
		}
	}
	.overlay {
		z-index: 10;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba($color: #000000, $alpha: 0.4);
		width: 100%;
		height: 100%;
		display: none;
	}
	.display-block {
		display: block;
	}
	.open {
		width: 30%;
	}
}
</style>
