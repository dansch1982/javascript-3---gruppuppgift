import { reactive } from "vue";
export const store = reactive({
	bookings: [],
	attraktioner: [
		{
			name: "Radiobilarna",
			img: "radiobil.jpg",
			slots: [
				{
					time: "09:00",
					space: 10,
				},
				{
					time: "09:30",
					space: 10,
				},
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
				{
					time: "11:30",
					space: 10,
				},
				{
					time: "12:00",
					space: 10,
				},
				{
					time: "12:30",
					space: 10,
				},
				{
					time: "13:00",
					space: 10,
				},
				{
					time: "13:30",
					space: 10,
				},
				{
					time: "14:00",
					space: 10,
				},
				{
					time: "14:30",
					space: 10,
				},
				{
					time: "15:00",
					space: 10,
				},
				{
					time: "15:30",
					space: 10,
				},
				{
					time: "16:00",
					space: 10,
				},
				{
					time: "16:30",
					space: 10,
				},
				{
					time: "17:00",
					space: 10,
				},
				{
					time: "17:30",
					space: 10,
				},
				{
					time: "18:00",
					space: 10,
				},
				{
					time: "18:30",
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
					time: "09:00",
					space: 10,
				},
				{
					time: "09:30",
					space: 10,
				},
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
				{
					time: "11:30",
					space: 10,
				},
				{
					time: "12:00",
					space: 10,
				},
				{
					time: "12:30",
					space: 10,
				},
				{
					time: "13:00",
					space: 10,
				},
				{
					time: "13:30",
					space: 10,
				},
				{
					time: "14:00",
					space: 10,
				},
				{
					time: "14:30",
					space: 10,
				},
				{
					time: "15:00",
					space: 10,
				},
				{
					time: "15:30",
					space: 10,
				},
				{
					time: "16:00",
					space: 10,
				},
				{
					time: "16:30",
					space: 10,
				},
				{
					time: "17:00",
					space: 10,
				},
				{
					time: "17:30",
					space: 10,
				},
				{
					time: "18:00",
					space: 10,
				},
				{
					time: "18:30",
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
					time: "09:00",
					space: 10,
				},
				{
					time: "09:30",
					space: 10,
				},
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
				{
					time: "11:30",
					space: 10,
				},
				{
					time: "12:00",
					space: 10,
				},
				{
					time: "12:30",
					space: 10,
				},
				{
					time: "13:00",
					space: 10,
				},
				{
					time: "13:30",
					space: 10,
				},
				{
					time: "14:00",
					space: 10,
				},
				{
					time: "14:30",
					space: 10,
				},
				{
					time: "15:00",
					space: 10,
				},
				{
					time: "15:30",
					space: 10,
				},
				{
					time: "16:00",
					space: 10,
				},
				{
					time: "16:30",
					space: 10,
				},
				{
					time: "17:00",
					space: 10,
				},
				{
					time: "17:30",
					space: 10,
				},
				{
					time: "18:00",
					space: 10,
				},
				{
					time: "18:30",
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
					time: "09:00",
					space: 10,
				},
				{
					time: "09:30",
					space: 10,
				},
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
				{
					time: "11:30",
					space: 10,
				},
				{
					time: "12:00",
					space: 10,
				},
				{
					time: "12:30",
					space: 10,
				},
				{
					time: "13:00",
					space: 10,
				},
				{
					time: "13:30",
					space: 10,
				},
				{
					time: "14:00",
					space: 10,
				},
				{
					time: "14:30",
					space: 10,
				},
				{
					time: "15:00",
					space: 10,
				},
				{
					time: "15:30",
					space: 10,
				},
				{
					time: "16:00",
					space: 10,
				},
				{
					time: "16:30",
					space: 10,
				},
				{
					time: "17:00",
					space: 10,
				},
				{
					time: "17:30",
					space: 10,
				},
				{
					time: "18:00",
					space: 10,
				},
				{
					time: "18:30",
					space: 10,
				},
			],
		},
	],
	restaurang: {
		name: "Restaurang",
		slots: [
			{
				time: "11:00",
				space: 20,
			},
			{
				time: "12:00",
				space: 20,
			},
			{
				time: "13:00",
				space: 20,
			},
		],
	},
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
