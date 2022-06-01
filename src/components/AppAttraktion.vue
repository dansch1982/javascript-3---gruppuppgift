<template>
	<section>
		<img :src="require('@/assets/' + attraktion.img)" alt="" />
		<article>
			<h2>
				{{ attraktion.name }}
			</h2>
		</article>
	</section>
</template>
<script>
export default {
	props: {
		attraktion: Object,
	},
	methods: {},
};
</script>
<style lang="scss" scoped>
@import "../style/imports";
section {
	width: 300px;
	max-width: 300px;
@include card;
	img {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		width: 300px;
		-webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)));
	}
	article {
		padding: 1rem;
		h2, h3 {
			text-align: center;
		}
	}
	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
}
</style>
