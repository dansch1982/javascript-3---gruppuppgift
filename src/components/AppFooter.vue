<template>
	<footer>
		<section class="container">
			<article>
				<h2>Om oss</h2>
				<ul>
					<li @click="toggle('hitta hit')">Hitta hit</li>
					<li @click="toggle('kontakt')">Kontakt</li>
				</ul>
			</article>
			<article>
				<h2>Följ oss</h2>
				<ul>
					<li>
						<article class="fb"></article>
						Facebook
					</li>
					<li>
						<article class="instagram"></article>
						Instagram
					</li>
					<li>
						<article class="tiktok"></article>
						Tiktok
					</li>
				</ul>
			</article>
		</section>
		<section class="popup" ref="popup">
			<section class="popupContainer">
				<section class="content" ref="content"></section>
				<article class="close" @click="reset()">✖</article>
			</section>
		</section>
		<section class="overlay" ref="overlay"></section>
	</footer>
</template>

<script>
export default {
	mounted() {
		this.$refs.overlay.addEventListener("click", () => {
			this.reset();
		});
	},
	methods: {
		reset() {
			const overlay = this.$refs.overlay;
			const popup = this.$refs.popup;
			overlay.classList.remove("opacity-100", "z-index-30");
			popup.classList.remove("width-50vw", "height-50vh", "z-index-40");
		},
		toggle(option) {
			switch (option) {
				case "hitta hit":
					this.find();
					break;
				case "kontakt":
					this.contact();
					break;
				default:
					break;
			}
		},
		contact() {
			const html = `
			<section class="padding-2rem display-grid custom-grid-row gap-05 width-100">
			<h2>Kontakta oss</h2>
			<label class="display-flex flex-direction-column">
			Ditt namn
			<input type="text" class="customInput max-width-200px">
			</label>
			<label class="display-flex flex-direction-column">
			Din e-post
			<input type="email" class="customInput max-width-200px">
			</label>
			<label class="display-flex flex-direction-column">
			Meddelande
			<textarea class="height-100 resize-none customInput"></textarea>
			</label>
			<button class="customInput max-width-content margin-left-auto" @click="this.reset()">Skicka</button>
			</section>
			`;
			this.showAbout(html);
		},
		find() {
			const html = `
					<iframe
					class="width-100 height-100"
					src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d26302.863317075164!2d17.21028639680045!3d60.66006031045921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e1!4m5!1s0x4660c2ffbb3b088d%3A0x4034506de8c8360!2zR8Okdmxl!3m2!1d60.6748796!2d17.1412726!4m5!1s0x4660c19986b8e511%3A0xfbdc22b95dd5fe34!2sAB%20Furuviksparken%2C%20Dannemansv%C3%A4gen%204%2C%20814%2091%20Furuvik!3m2!1d60.6517233!2d17.3326109!5e0!3m2!1sen!2sse!4v1652961130125!5m2!1sen!2sse"
					style="border: 0"
					allowfullscreen="true"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade">
					</iframe>
					`;
			this.showAbout(html);
		},
		showAbout(html) {
			this.$refs.overlay.classList.add("opacity-100", "z-index-30");
			this.$refs.popup.classList.add("width-50vw", "height-50vh", "z-index-40");
			this.$refs.content.innerHTML = html;
		},
	},
};
</script>

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
			gap: 0.5rem;
			h2 {
				font-size: 1rem;
				text-align: center;
			}
			ul {
				height: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				list-style: none;
				gap: 3px;
				li {
					display: flex;
					width: 100%;
					&:hover {
						cursor: pointer;
					}
					article {
						width: 1.5rem;
						height: 100%;
						background-size: contain;
						background-repeat: no-repeat;
					}
					.fb {
						background-image: url("@/assets/fb.webp");
					}
					.instagram {
						background-image: url("@/assets/instagram.webp");
					}
					.tiktok {
						background-image: url("@/assets/tiktok.png");
					}
				}
			}
		}
	}
	.popup {
		@include fixed;
		@include card;
		display: flex;
		flex-direction: row;
		width: 0vw;
		height: 0vh;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		overflow: hidden;
		gap: 0;
		transition: 0.2s;
		.popupContainer {
			position: relative;
			width: 100%;
			height: 100%;
			.content {
				width: 100%;
				height: 100%;
			}
			.close {
				display: flex;
				justify-content: center;
				align-items: center;
				position: absolute;
				top: 1rem;
				right: 1rem;
				font-size: larger;
				transform-origin: center;
				width: max-content;
				height: max-content;
				&:hover {
					cursor: pointer;
					transform: scale(1.2);
				}
			}
		}
	}
}
</style>
