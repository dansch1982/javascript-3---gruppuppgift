<template>
	<section class="schedule">
		<h2>Dagens Schema</h2>
		<section class="bookings" ref="bookings">
			<AppBooking v-for="(booking, index) in store.bookings" :key="index">
				<article class="booking">
					<span class="time">{{ booking.attraktion.slots[booking.index].time }}</span>
					<span class="name">{{ booking.attraktion.name }}</span>
					<button class="remove" @click="remove(booking)">✖</button>
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
		};
	},
    methods: {
        remove(booking) {
            this.store.removeBooking(booking)
        }
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
            background-color: lighten(#5DB2DE, 10%);
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
			.name, .time {
			}
		}
	}
}
</style>
