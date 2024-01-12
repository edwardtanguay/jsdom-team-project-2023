const IbrahimJsDomButtonThatAddsOpacity001 = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:

	setTimeout(() => {
		const pElem = document.querySelector<HTMLParagraphElement>(".solution p");
		const btnOpacity = document.querySelector<HTMLButtonElement>(".solution button");

		if (pElem && btnOpacity) {

			btnOpacity.addEventListener("click", (e) => {
				e.preventDefault();
				pElem.style.opacity = "0.5";
				pElem.style.color = "red";
			});
		}
	});

	return /*html*/`
	<div class="solution">
		<p>Online</p>
		<form>
		<button>Change Opacity and color</button>
		</form>
	</div>
`;
};

export default IbrahimJsDomButtonThatAddsOpacity001;