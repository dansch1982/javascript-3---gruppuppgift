<template>
	<header>
		<section class="container">
			<article class="logo">
				<img src="../assets/logo2.png" alt="" />
				<h1>Tivoliè</h1>
			</article>
			<article class="info">info</article>
		</section>
		<section class="container nav">
			<nav>
				<button>Attraktioner</button>
				<button>Event</button>
				<button>Restaurang</button>
			</nav>
		</section>
	</header>
</template>

<script></script>

<style lang="scss" scoped>
@import "../style/imports";
header {
	display: flex;
	flex-direction: column;
	.container {
		display: flex;
		flex-direction: row;
        width: 100%;
        justify-content: center;
		.logo {
			width: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
            padding: 1rem;
			img {
				height: 8rem;
			}
			h1 {
				font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
				font-size: 5rem;
			}
		}
		.info {
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: aqua;
		}
	}
	nav {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
        button {
            background-color: unset;
            border: none;
            padding: 0 1rem;
            color: white;
            font-size: 1.25rem;
            &:hover {
                cursor: pointer;
                background-color: darken($primary, 10%);
            }
        }
	}
}
</style>
