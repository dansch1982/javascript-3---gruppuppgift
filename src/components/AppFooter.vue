<template>
	<footer>
		<section class="container">
			<article>
				<h2>Om oss</h2>
				<ul>
					<li>Hitta hit</li>
					<li>Kontakt</li>
				</ul>
			</article>
			<article>
				<h2>Följ oss</h2>
				<ul>
					<li>Facebook</li>
					<li>Instagram</li>
					<li>Tiktok</li>
				</ul>
			</article>
		</section>
	</footer>
</template>

<style lang="scss" scoped>
@import "../style/imports";
footer {
	background-color: $primary;
	justify-content: center;
	display: flex;
    padding: 1rem;
	section {
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		max-width: 1000px;
		article {
			height: 100%;
			display: flex;
			flex-direction: column;
            h2 {
                font-size: 1rem;
            }
			ul {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				list-style: none;
				li {
					width: 100%;
				}
			}
		}
	}
}
</style>
