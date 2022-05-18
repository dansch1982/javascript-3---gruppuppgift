<template>
	<section>
		<h2>Attraktioner</h2>
		<section class="section">
			<AppAttraktion v-for="(attraktion, index) in store.attraktioner" :key="index" :attraktion="attraktion" @click="showAttraction(attraktion)" />
		</section>
		<section class="popup" ref="popup">
			<section class="bg"></section>
			<section class="info">
				<h2>{{ current.name }}</h2>
				<p>Boka tid</p>
				<section class="buttons">
					<article class="button" v-for="(slot, index) in current.slots" :key="index">
						<button @click="slot.space <= 0 ? '' : book(current, index)" :class="slot.space <= 0 ? 'red' : ''">
							{{ slot.time }}
							<span>{{ slot.space }} platser kvar</span>
						</button>
					</article>
				</section>
			</section>
			<article class="close" @click="reset()">✖</article>
		</section>
		<section class="overlay" ref="overlay"></section>
	</section>
</template>
<script>
import AppAttraktion from "./AppAttraktion.vue";
import { store } from "@/store";
export default {
	data() {
		return {
			current: {
				name: null,
				desc: null,
				img: "placeholder.png",
			},
			store: store
		};
	},
	mounted() {
		this.$refs.overlay.addEventListener("click", () => {
			this.reset();
		});
	},
	methods: {
		book(current, index) {
			const { slots } = current;
			const slot = slots[index];
			slot.space--;
			const object = {
				attraktion: current,
				index: index,
			};
			this.store.addBooking(object);
		},
		reset() {
			this.current = {
				name: null,
				desc: null,
				img: "radiobil.jpg",
				slots: [],
			};
			this.$refs.overlay.classList.remove("opacity-100");
			this.$refs.overlay.classList.remove("z-index-30");
			this.$refs.popup.classList.remove("display-flex");
			this.$refs.popup.classList.remove("z-index-40");
		},
		showAttraction(attraktion) {
			this.current = attraktion;
			const overlay = this.$refs.overlay;
			overlay.classList.toggle("opacity-100");
			overlay.classList.toggle("z-index-30");

			const popup = this.$refs.popup;
			const bg = popup.querySelector(".bg");
			bg.style.backgroundImage = `
			linear-gradient(to right,
			rgba(255,255,255,0) 0%,
			rgba(255,255,255,0.5) 30%,
            rgba(255,255,255,1)),
			url(${require("@/assets/" + this.current.img)})
			`;
			popup.classList.toggle("display-flex");
			popup.classList.toggle("z-index-40");
		},
	},
	components: { AppAttraktion },
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
section {
	h2 {
		text-align: center;
		margin-bottom: 1rem;
	}
	.section {
		margin: auto;
		max-width: 1200px;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 1rem;
		gap: 3rem;
	}
	.popup {
		@include fixed;
		@include card;
		display: flex;
		flex-direction: row;
		width: 50vw;
		height: 50vh;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		display: none;
		overflow: hidden;
		gap: 0;
		@media only screen and (max-width: 1000px) {
			flex-direction: column;
		}
		.bg {
			width: 100%;
			height: 100%;
			padding: 1rem;
			background-size: cover;
			background-position: center;
		}
		.info {
			padding: 3rem 1rem;
			@media only screen and (max-width: 1000px) {
				padding: 1rem;
			}
			h2 {
				margin-bottom: 0;
			}
			h3 {
				text-align: center;
			}
			p {
				padding: 0.5rem;
			}
			.buttons {
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
				.button {
					button {
						position: relative;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						border: 0;
						background-color: unset;
						outline: none;
						border: 2px solid black;
						padding: 0.5rem 1rem;
						&:hover {
							cursor: pointer;
							background-color: greenyellow;
						}
						&:hover span {
							display: block;
						}
						span {
							z-index: 50;
							padding: 0.5rem;
							border-radius: 5px;
							background-color: white;
							border: 2px solid black;
							width: max-content;
							bottom: 120%;
							left: 50%;
							transform: translateX(-50%);
							position: absolute;
							display: none;
						}
					}
				}
			}
		}
		.close {
			display: flex;
			justify-content: center;
			align-items: center;
			position: absolute;
			top: 1rem;
			right: 1rem;
			font-size: larger;
			transform-origin: center;
			&:hover {
				cursor: pointer;
				transform: scale(1.2);
			}
		}
	}
}
.red {
	background-color: red !important;
}
</style>
