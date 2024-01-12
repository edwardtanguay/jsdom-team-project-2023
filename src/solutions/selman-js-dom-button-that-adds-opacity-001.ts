const SelmanJsDomButtonThatAddsOpacity001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const addOpacityButton =
			document.querySelector<HTMLButtonElement>(".opacity_up");
		const decreaseOpacityButton =
			document.querySelector<HTMLButtonElement>(".opacity_down");
		const paragraph =
			document.querySelector<HTMLParagraphElement>("div.solution p");

		let currentOpacity = 0.1;
		const changeOpacity = (increment: number) => {
			currentOpacity += increment;
			if (paragraph) {
				paragraph.style.opacity = String(currentOpacity);
			}
		};
		if (addOpacityButton && decreaseOpacityButton) {
			addOpacityButton.addEventListener("click", (event) => {
				event.preventDefault();
				changeOpacity(0.1);
			});
			decreaseOpacityButton.addEventListener("click", (event) => {
				event.preventDefault();
				changeOpacity(-0.1);
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
		<p class="p-2 font-bold text-lg ">online</p>
		<button class="opacity_up bg-green-500 p-2 rounded-sm">add opacity</button>
		<button class="opacity_down bg-red-500 p-2 rounded-sm">decrease opacity</button>
	</div>
`;
};
export default SelmanJsDomButtonThatAddsOpacity001;
