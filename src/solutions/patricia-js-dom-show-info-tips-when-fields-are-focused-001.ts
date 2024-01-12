const PatriciaJsDomShowInfoTipsWhenFieldsAreFocused001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const zipCode = document.querySelector<HTMLInputElement>(".zipCode");
		const zipCodeInfo =
			document.querySelector<HTMLParagraphElement>(".zipCodeInfo");
		if (zipCode && zipCodeInfo) {
			zipCode.addEventListener("focus", () => {
				zipCodeInfo.style.display = "block";
			});
			zipCode.addEventListener("blur", () => {
				zipCodeInfo.style.display = "none";
			});
		}

		const state = document.querySelector<HTMLInputElement>(".state");
		const stateInfo =
			document.querySelector<HTMLParagraphElement>(".stateInfo");
		if (state && stateInfo) {
			state.addEventListener("focus", () => {
				stateInfo.style.display = "block";
			});
			state.addEventListener("blur", () => {
				stateInfo.style.display = "none";
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
		<p>Zip Code</p>
		<input class="zipCode text-gray-950" type="text" maxlength="5">
		<p class="zipCodeInfo hidden">please enter a 5-digit number</p>

		<p>State</p>
		<input class="state text-gray-950" type="text">
		<p class="stateInfo hidden">Please enter only two letters, e.g. AZ</p>
	</div>
`;
};
export default PatriciaJsDomShowInfoTipsWhenFieldsAreFocused001;
