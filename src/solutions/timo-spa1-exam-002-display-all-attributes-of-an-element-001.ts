const TimoSpa1Exam002DisplayAllAttributesOfAnElement001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const attributesCardButton = document.querySelector(
			".attributes-card__button"
		) as HTMLButtonElement;
		const attributesCardAttributes = document.querySelector(
			".attributes-card__attributes"
		) as HTMLPreElement;
		const attributesCardImage = document.querySelector(
			".attributes-card__image"
		) as HTMLImageElement;

		console.log(attributesCardImage.attributes);

		const imageAttributes: { [key: string]: string } = {};

		for (const attribute of attributesCardImage.attributes) {
			imageAttributes[attribute.name] = attribute.value;
		}

		attributesCardAttributes.innerHTML = JSON.stringify(
			imageAttributes,
			null,
			2
		);

		attributesCardButton.addEventListener("click", () => {
			attributesCardAttributes.classList.toggle("hide-attributes");

			if (
				attributesCardAttributes.classList.contains("hide-attributes")
			) {
				attributesCardButton.textContent = "Display attributes";
			} else {
				attributesCardButton.textContent = "Hide attributes";
			}
		});
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<style>
		.attributes-card {
			border: 1px solid #ccc;
			border-radius: 0.5rem;
			padding: 1rem;
			display: flex;
			justify-content: start;
			gap: 1rem;
		}

		.attributes-card__left-col {
			width: 15vw;
		}

		.attributes-card__button {
			color: #000;
			padding: 0.5rem 2rem;
			border-radius: 0.5rem;
			background-color: #ccc;
			transition: all 0.5s ease;
			align-self: flex-start;
		}

		.attributes-card__button:hover {
			background-color: #000;
			color: #fff;
		}

		.attributes-card__right-col {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			overflow: auto;
			width: calc(100% - 15vw);
		}

		.attributes-card__attributes {
			width: 100%;
			border: 1px solid #ccc;
			border-radius: 0.5rem;
			padding: 1rem;
			overflow: auto;
			font-size: 0.8rem;
		}

		.hide-attributes {
			display: none;
		}
	</style>

	<div class="solution">
		<div class="attributes-card">
			<div class="attributes-card__left-col">
				<img class="attributes-card__image" src="images/general/book77827.jpg"
    		id="book77827"
    		alt="Book: Node.js Rezepte und Lösungen"
    		title="Node.js Rezepte und Lösungen"
    		class="img-responsive"
    		aria-label="Book: Node.js Rezepte und Lösungen"
    		/>
			</div>
			<div class="attributes-card__right-col">
				<button class="attributes-card__button">
					Display attributes
				</button>
				<pre class="attributes-card__attributes hide-attributes">
				</pre>
			</div>
		</div>
	</div>
`;
};
export default TimoSpa1Exam002DisplayAllAttributesOfAnElement001;
