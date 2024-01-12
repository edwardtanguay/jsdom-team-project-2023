const LukasJsDomAllowUserToClickButtonOrPressKey001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const bodyElem = document.querySelector("body");
		const saveButton = document.querySelector(".save_button");
		const printButton = document.querySelector(".print_button");
		const textField = document.querySelector(".text_field");
		if (saveButton && textField && bodyElem && printButton) {
			bodyElem.addEventListener("keydown", (e) => {
				if (e.key === "s" || e.key === "S") {
					textField.innerHTML = `<span class="text-orange-300">Saved</span>, you can reset this by pressing R`;
				} else if (e.key === "p" || e.key === "P") {
					textField.innerHTML = `<span class="text-cyan-300">Printed</span>, you can reset this by pressing R`;
				} else if (e.key === "r" || e.key === "R") {
					textField.innerHTML = "Please Press S or P";
				}
			});
			saveButton.addEventListener("click", () => {
				textField.innerHTML = `<span class="text-orange-300">Saved</span>, you can reset this by pressing R`;
			});
			printButton.addEventListener("click", () => {
				textField.innerHTML = `<span class="text-cyan-300">Printed</span>, you can reset this by pressing R`;
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution flex justify-center gap-4 items-center">
		<div class="flex flex-col text-xl">
			<button class="save_button text-orange-300">Save</button>
			<button class="print_button text text-cyan-300">Print</button>
		</div>
		<p class="flex items-center text-xl text_field text-center">Please Press S or P</p>
	</div>
`;
};
export default LukasJsDomAllowUserToClickButtonOrPressKey001;
