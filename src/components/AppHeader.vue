<template>
	<header>
		<section class="container">
			<article class="logo">
				<img src="../assets/logo2.png" alt="" />
				<h1>Tivoliè</h1>
			</article>
			<article class="info">info</article>
		</section>
		<section class="container nav">
			<nav>
				<button>Attraktioner</button>
				<button>Event</button>
				<button>Restaurang</button>
				<section class="scheduleToggler" @click="toggleSchedule" ref="scheduleToggler">
					<article>
						<span></span>
						<span></span>
						<span></span>
					</article>
				</section>
			</nav>
		</section>
	</header>
</template>

<script>
export default {
	data() {
		return {
			showSchedule: false,
		};
	},
	methods: {
		toggleSchedule() {
			this.$refs.scheduleToggler.classList.toggle("open");
			this.showSchedule = !this.showSchedule;
			this.$emit("update:modelValue", this.showSchedule);
		},
	},
	props: {
		moduleValue: Boolean,
	},
};
</script>

<style lang="scss" scoped>
@import "../style/imports";
header {
	display: flex;
	flex-direction: column;
	.container {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		.logo {
			width: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;
			img {
				height: 8rem;
			}
			h1 {
				font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
				font-size: 5rem;
			}
		}
		.info {
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: aqua;
		}
	}
	nav {
		position: relative;
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		button {
			background-color: unset;
			border: none;
			padding: 0 1rem;
			color: white;
			font-size: 1.25rem;
			&:hover {
				cursor: pointer;
				background-color: darken($primary, 10%);
			}
		}
		.scheduleToggler {
			position: absolute;
			right: 1rem;
			top: 50%;
			transform: translateY(-50%);
			z-index: 30;
			article {
				width: 2.5rem;
				height: 2rem;
				display: grid;
				gap: 0.5rem;
				span {
					transition: 0.2s;
					height: 0.3rem;
					background-color: white;
				}
			}
			&:hover {
				cursor: pointer;
			}
		}
		.open {
			article {
				:nth-child(1n) {
					transform: rotate(45deg) translate(7px, 11px);
				}
				:nth-child(2n) {
					display: none;
				}
				:nth-child(3n) {
					transform: rotate(-45deg) translate(2px, -8px);
				}
			}
		}
	}
}
</style>
