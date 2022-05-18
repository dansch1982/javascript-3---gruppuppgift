import { reactive } from "vue";
export const store = reactive({
	bookings: [],
	attraktioner: [
		{
			name: "Radiobilarna",
			img: "radiobil.jpg",
			slots: [
				{
					time: "10:00",
					space: 10,
				},
				{
					time: "10:30",
					space: 10,
				},
				{
					time: "11:00",
					space: 10,
				},
			],
		},
		{
			name: "Pariserhjul",
			img: "pariserhjul.jpg",
			space: 10,
			slots: [
				{
					time: "10:00",
					space: 10,
				},
				{
					time: "10:30",
					space: 10,
				},
				{
					time: "11:00",
					space: 10,
				},
			],
		},
		{
			name: "Bergochdalbana",
			img: "bergochdalbana.jpg",
			space: 10,
			slots: [
				{
					time: "10:00",
					space: 10,
				},
				{
					time: "10:30",
					space: 10,
				},
				{
					time: "11:00",
					space: 10,
				},
			],
		},
		{
			name: "Slänggunga",
			img: "gunga.jpg",
			space: 10,
			slots: [
				{
					time: "10:00",
					space: 10,
				},
				{
					time: "10:30",
					space: 10,
				},
				{
					time: "11:00",
					space: 10,
				},
			],
		},
	],
	addBooking(value) {
		this.bookings.push(value);
		this.sort();
	},
	removeBooking(booking) {
		const index = this.bookings.indexOf(booking);
		booking.attraktion.slots[booking.index].space++;
		this.bookings.splice(index, 1);
		this.sort();
	},
	sort() {
		this.bookings.sort((a, b) => {
			a = a.attraktion.slots[a.index].time;
			b = b.attraktion.slots[b.index].time;
			if (a > b) {
				return 1;
			}
			if (a < b) {
				return -1;
			}
			return 0;
		});
	},
});
