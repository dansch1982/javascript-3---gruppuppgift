<template>
	<section class="schedule">
		<h2>Dagens Schema</h2>
		<section class="bookings" ref="bookings">
			<!-- Loop through new booking object created with bookings method -->
			<AppBooking v-for="(booking, index) in bookings(store.bookings)" :key="index">
				<article class="booking">
					<span class="time">{{ booking.object.booking.slots[booking.index].time }}</span>
					<span class="name">{{ booking.amount }}st {{ booking.object.booking.name }}</span>
					<button class="remove" @click="remove(booking.object)">✖</button>
				</article>
			</AppBooking>
		</section>
	</section>
</template>

<script>
import AppBooking from "./AppBooking.vue";
import { store } from "@/store";
export default {
	data() {
		return {
			store,
			/**
			 * Generate new object form store.bookings
			 * @param {Array} bookings - List of bookings
			 * @returns {Object} - New booking object
			 */
			bookings(bookings) {
				// Create a new booking object
				const newBookings = {};

				// Loop through each booking in store.bookings
				bookings.forEach((booking) => {
					/**
					 * Check if current booking name and index combination is already in new booking object
					 * If name does not exist:
					 * 		Add new object to booking object with name, amount and booking slot index
					 * If name exists:
					 * 		Increase amount by one
					 */
					if (!newBookings[`${booking.booking.name}-${booking.index}`]) {
						newBookings[`${booking.booking.name}-${booking.index}`] = {
							object: booking,
							amount: 1,
							index: booking.index,
						};
					} else {
						newBookings[`${booking.booking.name}-${booking.index}`].amount++;
					}
				});

				// Return new booking object
				return newBookings;
			},
		};
	},
	mounted() {},
	methods: {
		remove(booking) {
			this.store.removeBooking(booking);
		},
	},
	components: { AppBooking },
};
</script>

<style lang="scss" scoped>
.schedule {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	overflow: auto;
	h2 {
		text-align: center;
		white-space: nowrap;
	}
	.bookings {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		.booking {
			display: flex;
			gap: 0.5rem;
			white-space: nowrap;
			background-color: lighten(#5db2de, 10%);
			border-radius: 5px;
			padding: 0.25rem 1rem;
			.remove,
			.name,
			.time {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.remove {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: auto;
				background-color: unset;
				border: none;
				color: rgb(197, 0, 0);
				font-size: 1.5rem;
				&:hover {
					cursor: pointer;
				}
			}
			.time {
				font-weight: bold;
			}
		}
	}
}
</style>
