const TimoSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const productBox = document.querySelector(
			".product-box"
		) as HTMLElement;
		const productBoxButton = document.querySelector(
			".product-box__button"
		) as HTMLButtonElement;
		productBoxButton.addEventListener("click", () => {
			productBox.classList.toggle("active");
			productBoxButton.classList.toggle("active");

			if (productBoxButton.classList.contains("active")) {
				productBoxButton.textContent = "Remove from cart";
			} else {
				productBoxButton.textContent = "Buy";
			}
		});
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<style>
		.product-box {
			border: 1px solid #ccc;
			border-radius: 0.5rem;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 5rem;
			transition: all 0.5s ease;
		}

		.product-box.active {
			background-color: #191919;
		}

		.product-box__image {
			height: 150px;
		}

		.product-box__content {
			display: flex;
			justify-content: space-between;
			gap: 2rem;
		}

		.product-box__button {
			color: #000;
			padding: 0.5rem 2rem;
			border-radius: 0.5rem;
			background-color: #ccc;
			transition: all 0.5s ease;
			align-self: flex-end;
		}

		.product-box__button.active {
			background-color: #000;
			color: #fff;
		}
	</style>

	<div class="solution">
		<div class="product-box">
			<div class="product-box__content">
				<img class="product-box__image" src="https://edwardtanguay.vercel.app/customImages/techBooks/practicalJamstack.jpg" alt="Product Image">	
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>	
			</div>
			<button class="product-box__button">Buy</button>
		</div>
	</div>
`;
};
export default TimoSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001;
