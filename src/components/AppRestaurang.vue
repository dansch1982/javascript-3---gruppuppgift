<template>
	<section class="restaurang">
		<h2>Välkommen till våran restaurang</h2>
		<section class="bg"></section>
		<section class="booking">
			<h3>Boka tid</h3>
			<section class="buttons">
				<article class="button" v-for="(slot, index) in store.restaurang.slots" :key="index">
					<button @click="slot.space <= 0 ? '' : book(slot, index)" :class="slot.space <= 0 ? 'red' : ''">
						{{ slot.time }}
						<span>{{ slot.space }} platser kvar</span>
					</button>
				</article>
			</section>
		</section>
	</section>
</template>

<script>
import { store } from "@/store";
export default {
	data() {
		return {
			store: store,
		};
	},
	methods: {
		book(slot, index) {
			slot.space--;
			const object = {
				cat: "restaurang",
				attraktion: store.restaurang,
				index: index,
			};
			this.store.addBooking(object);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../style/imports";
.restaurang {
	max-width: 1000px;
	height: 100%;
	display: grid;
	grid-template-rows: max-content auto max-content;
	margin: auto;
	gap: 1rem;
	h2,
	h3 {
		text-align: center;
	}
	.bg {
        border-radius: 10px;
		box-shadow: 3px 3px 10px black;
		background-image: url("@/assets/restaurang.jpg");
		background-repeat: no-repeat;
		background-size: cover;
	}
	.booking {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
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
}
</style>
