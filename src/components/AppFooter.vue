<template>
	<footer>
		<section class="container">
			<article>
				<h2>List titel</h2>
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>
			</article>
			<article>
				<h2>List titel</h2>
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>
			</article>
			<article>
				<h2>List titel</h2>
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
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
				justify-content: center;
				list-style: none;
			}
		}
	}
}
</style>
