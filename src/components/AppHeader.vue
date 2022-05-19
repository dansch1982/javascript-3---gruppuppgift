<template>
	<header>
		<section class="container">
			<article class="logo" @click="updateState('')">
				<img src="../assets/logo2.png" alt="" />
				<h1>Tivoliè</h1>
			</article>
			<article class="info" ref="info"></article>
		</section>
		<section class="container nav">
			<nav>
				<button v-for="(button, index) in buttons" :key="index" @click="updateState(button)">{{button}}</button>
				
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
			buttons: ["attraktioner", "event", "restaurang"],
			showSchedule: false,
		};
	},
	mounted() {
		if (!this.interval) {
			this.updateInfo();
			this.interval = setInterval(() => {
				this.updateInfo();
			}, 60_000);
		}
	},
	methods: {
		toggleSchedule() {
			this.$refs.scheduleToggler.classList.toggle("open");
			this.showSchedule = !this.showSchedule;
			this.$emit("update:modelValue", this.showSchedule);
		},
		async updateInfo() {
			const url = new URL("https://api.met.no/weatherapi/nowcast/2.0/complete");

			url.searchParams.append("lat", "60.6499");
			url.searchParams.append("lon", "17.3459");

			const data = await (await fetch(url)).json();
			const temp = data.properties.timeseries[0].data.instant.details.air_temperature + "C";

			const date = new Date().toLocaleDateString("sv-SE", { hour: "2-digit", minute: "2-digit" });
			this.$refs.info.innerText = `Tid\n${date}\n\nTemperatur\n${temp}`;
		},
		updateState(value) {
			this.$emit('updateState', value)
		}
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
			&:hover {
				cursor: pointer;
			}
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
			color: black;
			font-size: larger;
		}
	}
	nav {
		position: relative;
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		button {
			text-transform: capitalize;
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
				transition: 0.2s;
				span {
					transition: 0.2s;
					height: 0.3rem;
					background-color: white;
				}
			}
			&:hover {
				cursor: pointer;
				article {
					transform: scale(110%);
				}
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
