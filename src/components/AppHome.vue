<template>
	<section class="home">
		<h2>Välkommen till tivolit Tivoliè!</h2>
		<section class="bg"></section>
        <section class="hours">
            <h3>Öppentider</h3>
            <p>Onsdag till Söndag</p>
            <p>08:00 - 20:00</p>
        </section>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/imports";
.home {
    max-width: 1000px;
	height: 100%;
	display: grid;
	grid-template-rows: max-content auto max-content;
    grid-template-columns: 100%;
    justify-content: center;
	margin: auto;
	gap: 1rem;
	h2 {
        text-align: center;
	}
	.bg {
		border-radius: 10px;
		box-shadow: 3px 3px 10px black;
		background-image: url("@/assets/cover.jpg");
		background-repeat: no-repeat;
		background-size: cover;
        background-position: bottom;
	}
    .hours {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        h3, p {
            text-align: center;
        }
    }
}
</style>
