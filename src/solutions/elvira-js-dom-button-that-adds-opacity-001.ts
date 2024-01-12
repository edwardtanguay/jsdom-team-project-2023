const ElviraJsDomButtonThatAddsOpacity001 = () => {
	// CODE HERE
	setTimeout(() => {
		const textP = document.querySelector<HTMLParagraphElement>("p");
		console.log(textP)
		const button = document.querySelector<HTMLButtonElement>("button");
		if (textP && button) {
			textP.style.opacity = "0";

			button.addEventListener("click", (e) => {
				e.preventDefault();
				textP.style.opacity += ".5";
			});
		}
	}, 0);

	return /*html*/ `
	<div class="solution">
		<p>Lorem ipsum dolor sit amet.</p>
		<button>buy</button>
	</div>
`;
};
export default ElviraJsDomButtonThatAddsOpacity001;
