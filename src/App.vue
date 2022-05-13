<template>
	<AppHeader v-model=showSchedule />
	<AppMain :showSchedule="showSchedule" />
	<AppFooter  />
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
		};
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
#app {
	display: grid;
	grid-template-rows: max-content auto max-content;
	width: 100vw;
	height: 100vh;
}
</style>
