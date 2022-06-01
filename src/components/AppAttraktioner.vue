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
					<!-- Loop through each time slot -->
					<article class="button" v-for="(slot, index) in current.slots" :key="index">
						<!--
							If space is less than or equal to 0:
								Click event does nothing, and class change to red.
							If space is more than 1:
								Click event run booking method.
						-->
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
			store: store,
		};
	},
	mounted() {
		this.$refs.overlay.addEventListener("click", () => {
			this.reset();
		});
	},
	methods: {
		/**
		 * Method for booking a time slot
		 * @param {Object} current - The current booking object
		 * @param {Number} index - The index of booking object time slot
		 */
		book(current, index) {
			// Get slots of current object using destructuring
			const { slots } = current;

			// Get specific slot using index
			const slot = slots[index];

			// Decrease slot by one
			slot.space--;

			// Create an object to book
			const object = {
				booking: current,
				index: index,
			};

			// Run addBooking method on booking store
			this.store.addBooking(object);

			// Run CSS to indicate an item was booked
			const toggler = document.querySelector(".scheduleToggler");
			toggler.classList.toggle("added");
			toggler.addEventListener(
				"transitionend",
				() => {
					toggler.classList.toggle("added");
				},
				{
					once: true,
				}
			);
		},
		reset() {
			this.current = {
				name: null,
				desc: null,
				img: "placeholder.png",
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
			max-width: 50%;
			height: 100%;
			overflow-x: hidden;
			overflow-y: auto;
			@media only screen and (max-width: 1000px) {
				max-width: 100%;
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
				text-align: center;
			}
			.buttons {
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
				align-content: center;
				justify-content: center;
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
</style>
