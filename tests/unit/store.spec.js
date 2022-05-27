const { store } = require("@/store");

describe("Testing booking system", () => {

	let booking = {
		booking: {
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
		index: 1
	};

	beforeEach(() => {
		store.bookings.length = 0;
		booking = {
			booking: {
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
			index: 1
		};
	});

	it("In a new instance of the store the length of store.booking should be 0", () => {
		expect(store.bookings.length).toBe(0);
	});

	it("After adding a booking the the length of store.booking should be 1", () => {
		store.addBooking(booking)
		expect(store.bookings.length).toBe(1);
	});
	
	it("After adding a booking, then removeing it store.booking should be 0 space should increase by 1", () => {
		store.addBooking(booking)
		expect(store.bookings.length).toBe(1);
		const space = booking.booking.slots[booking.index].space
		store.removeBooking(booking)
		expect(booking.booking.slots[booking.index].space).toBeGreaterThan(space)
		expect(store.bookings.length).toBe(0);
	})

});
