const LukasJsDomShowInfoTipsWhenFieldsAreFocused001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const inputZip = document.querySelector(".zip_input");
		const zipInfo = document.querySelector(".zip_info");
		const labelZip = document.querySelector(".zip_label");
		const inputState = document.querySelector(".state_input");
		const stateInfo = document.querySelector(".state_info");
		const labelState = document.querySelector(".state_label");
		if (zipInfo && labelZip) {
			zipInfo.classList.add("hidden");
			if (inputZip) {
				inputZip.addEventListener("focus", () => {
					zipInfo.classList.remove("hidden");
					labelZip.classList.add("text-orange-400");
				});
				inputZip.addEventListener("blur", () => {
					zipInfo.classList.add("hidden");
					labelZip.classList.remove("text-orange-400");
				});
			}
		}
		if (stateInfo && labelState) {
			stateInfo.classList.add("hidden");
			if (inputState) {
				inputState.addEventListener("focus", () => {
					stateInfo.classList.remove("hidden");
					labelState.classList.add("text-cyan-400");
				});
				inputState.addEventListener("blur", () => {
					stateInfo.classList.add("hidden");
					labelState.classList.remove("text-cyan-400");
				});
			}
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
<label for="" class="flex flex-col zip_label">Zip Code
	<input type="text" class="zip_input">
	<p class="zip_info text-orange-400">Please enter a 5-digit number</p>
</label>
<label for="" class="flex flex-col state_label">State
	<input type="text" class="state_input">
	<p class="state_info text-cyan-400">Please enter only two letters, eg AZ</p>
</label>
</div>
`;
};
export default LukasJsDomShowInfoTipsWhenFieldsAreFocused001;
