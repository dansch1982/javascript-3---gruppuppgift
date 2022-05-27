import { mount } from "@vue/test-utils";
import AppMain from "@/components/AppMainTesting.vue";

describe("Testing of the schedule", () => {
	const wrapper = mount(AppMain);

	beforeEach(async () => {
		await wrapper.setProps({ state: "" });
		wrapper.vm.store.bookings.length = 0;
	});

	it('New instance of app should contain the text "Öppentider"', () => {
		expect(wrapper.text()).toContain("Öppentider");
	});

	it('After changing state to "attraktioner" it should contain the text "Attraktioner"', async () => {
		await wrapper.setProps({ state: "attraktioner" });
		expect(wrapper.text()).toContain("Attraktioner");
	});

	it('After changing state to "restaurang" it should contain the text "Boka tid"', async () => {
		await wrapper.setProps({ state: "restaurang" });
		expect(wrapper.text()).toContain("Boka tid");
	});

	it('After changing state to "restaurang" and click a booking button store.bookings should be 1', async () => {
		await wrapper.setProps({ state: "restaurang" });
		await wrapper.find("button").trigger("click");
		expect(wrapper.vm.store.bookings.length).toBe(1);
	});

	it('After setting showSchedule to true it should contain the text "Dagens Schema"', async () => {
		await wrapper.setProps({ showSchedule: true });
		expect(wrapper.text()).toContain("Dagens Schema");
	});

  it('After booking a slot in restaurant Aside should contain the text "1st Restaurang"', async () => {
    await wrapper.setProps({ state: "restaurang" });
		await wrapper.find("button").trigger("click");
		await wrapper.setProps({ showSchedule: true });
		expect(wrapper.text()).toContain("1st Restaurang");
  })
});
