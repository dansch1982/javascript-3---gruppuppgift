<template>
	<header>
		<section class="container">
			<article class="logo" @click="updateState('')">
				<img src="../assets/logo2.png" alt="" />
				<h1>Tivoliè</h1>
			</article>
			<section class="info">
				<section class="container">
					<article class="time">Tid <span ref="time"></span></article>
					<article class="temp">Temp <span ref="temp"></span></article>
				</section>
			</section>
		</section>
		<section class="container nav">
			<nav>
				<button v-for="(button, index) in buttons" :key="index" @click="updateState(button)">{{ button }}</button>

				<section class="scheduleToggler" @click="toggleSchedule" ref="scheduleToggler">
					<article :class="store.bookings.length <= 0 ? 'blob' : 'blob scale-1'">{{ store.bookings.length }}</article>
					<article class="hamburger">
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
import { store } from "@/store";
export default {
	data() {
		return {
			store,
			buttons: ["attraktioner", "restaurang", "närområde"],
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
			const temp = data.properties.timeseries[0].data.instant.details.air_temperature + "°C";

			//const date = new Date().toLocaleDateString("sv-SE", { hour: "2-digit", minute: "2-digit" });
			const date = new Date();

			this.$refs.time.innerText = `${date.getHours()}:${date.getMinutes()}`;
			this.$refs.temp.innerText = temp;
			//this.$refs.info.innerText = `Tid ${date.getHours()}:${date.getMinutes()}\nTemperatur ${temp}`;
		},
		updateState(value) {
			this.$emit("updateState", value);
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
		position: relative;
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: center;
		.logo {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1rem;
			gap: 1rem;
			&:hover {
				cursor: pointer;
			}
			img {
				height: 8rem;
			}
			h1 {
				font-family: "Dancing Script", cursive;
				font-weight: bold;
				font-size: 6rem;
			}
		}
		.info {
			position: absolute;
			top: 0;
			right: 0;
			width: max-content;
			display: flex;
			justify-content: right;
			height: max-content;
			align-items: top;
			color: whitesmoke;
			font-size: larger;
			z-index: 50;
			.container {
				display: flex;
				flex-direction: column;
				align-items: left;
				justify-content: center;
				line-height: unset;
				background-color: $primary;
				padding: 1rem 1.5rem;
				border-bottom-left-radius: 1rem;
				width: max-content;
				article {
					display: flex;
					gap: 10px;
					justify-content: space-between;
				}
			}
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
			.blob {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 30px;
				height: 30px;
				position: absolute;
				top: -28px;
				left: -28px;
				border: 2px solid black;
				background-color: greenyellow;
				border-radius: 50%;
				transform: scale(0);
				transition: 0.2s;
			}
			.hamburger {
				width: 2.5rem;
				height: 2rem;
				display: grid;
				gap: 0.5rem;
				transition: 0.2s;
				span {
					transition: 0.2s;
					height: 0.3rem;
					background-color: white;
					border-radius: 100vw;
				}
				&:hover {
					cursor: pointer;
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
