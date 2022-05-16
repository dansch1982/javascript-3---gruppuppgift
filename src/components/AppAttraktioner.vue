<template>
	<section>
		<h2>Attraktioner</h2>
		<section class="section">
			<AppAttraktion v-for="(attraktion, index) in attraktioner" :key="index" :attraktion="attraktion" />
		</section>
	</section>
</template>
<script>
import AppAttraktion from "./AppAttraktion.vue";
export default {
	data() {
		return {
			attraktioner: [
				{
					name: "Radiobilarna",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740766301356052/bumpercars.jpg",
				},
				{
					name: "Pariserhjul",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740766607536128/ferriswheel.jpg",
				},
				{
					name: "Bergochdalbana",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740767148597300/rollercoaster.jpg",
				},
				{
					name: "Radiobilarna",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740766301356052/bumpercars.jpg",
				},
				{
					name: "Pariserhjul",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740766607536128/ferriswheel.jpg",
				},
				{
					name: "Bergochdalbana",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740767148597300/rollercoaster.jpg",
				},
				{
					name: "Radiobilarna",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740766301356052/bumpercars.jpg",
				},
				{
					name: "Pariserhjul",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740766607536128/ferriswheel.jpg",
				},
				{
					name: "Bergochdalbana",
					desc: "Beskrining",
					img: "https://cdn.discordapp.com/attachments/974629097206587442/975740767148597300/rollercoaster.jpg",
				},
			],
		};
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
}
</style>
