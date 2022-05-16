<template>
	<section>
		<img :src="attraktion.img" alt="" />
		<article>
			<h2>
				{{ attraktion.name }}
			</h2>
			<p>
				{{ attraktion.desc }}
			</p>
		</article>
	</section>
</template>
<script>
export default {
	props: {
		attraktion: Object,
	},
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
section {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: max-content;
	transition: 0.2s;
	box-shadow: 5px 5px 1rem 1px black;
	border-radius: 10px;
	img {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		width: 300px;
		-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
	}
	article {
		padding: 1rem;
		h2 {
			text-align: center;
		}
	}
	//padding: 1rem;
	&:hover {
		transform: scale(1.1);
        cursor: pointer;
	}
}
</style>
