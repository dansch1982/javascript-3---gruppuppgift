<template>
	<AppHeader v-model="showSchedule" @updateState="updateState" />
	<AppMain :showSchedule="showSchedule" :state="state" @closeSchedule="closeSchedule" />
	<AppFooter />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
	name: "App",
	components: { AppHeader, AppMain, AppFooter },
	data() {
		return {
			showSchedule: false,
			state: "",
		};
	},
	methods: {
		closeSchedule() {
			this.showSchedule = false;
		},
		updateState(value) {
			this.state = value;
		},
	},
};
</script>

<style lang="scss">
@import "@/style/imports";
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#app {
	position: relative;
	display: grid;
	grid-template-rows: max-content auto max-content;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>
