<template>
	<section class="home">
        <section class="title">
            <h2>Välkommen till Tivoliè!</h2>
            <h3>"Nordens roligaste tivoli"</h3>
        </section>
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
    .title {

        h2, h3 {
            text-align: center;
        }
        h3 {
            font-family: 'Times New Roman', Times, serif;
            font-weight:400;
            font-style: italic;
        }
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
