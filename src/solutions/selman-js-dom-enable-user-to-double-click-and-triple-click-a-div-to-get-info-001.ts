const SelmanJsDomEnableUserToDoubleClickAndTripleClickADivToGetInfo001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const doubleClickButton =
			document.querySelector<HTMLButtonElement>("#doubleClickButton"); // first button
		const tripleClickButton =
			document.querySelector<HTMLButtonElement>("#tripleClickButton"); // second button

		const primaryClickInfo = document.querySelector(".double-click-info"); // first paragraph
		const secondaryClickInfo = document.querySelector(".triple-click-info"); // second paragraph

		// OTHER CODE HERE:

		doubleClickButton?.addEventListener("dblclick", () => {
			primaryClickInfo?.classList.toggle("invisible");
		});
		tripleClickButton?.addEventListener("click", (event) => {
			if (event.detail === 3) {
				secondaryClickInfo?.classList.toggle("invisible");
			}
		});
	});
	return /*html*/ `
	<div class="solution">
		<button id="doubleClickButton" class="p-4 border-black rounded-md bg-purple-500 text-black font-semibold ">Double-click for info</button>
		<button id="tripleClickButton" class="p-4 border-black rounded-md bg-orange-500 text-black font-semibold ">Triple-click for info</button>
		 <div class="flex">
		<p class="double-click-info font-mono text-purple-500 mr-10">Here is the info</p>
		<p class="triple-click-info font-mono text-orange-500 ml-10">Here is the info</p>
	</div>

	</div>
     
`;
};
export default SelmanJsDomEnableUserToDoubleClickAndTripleClickADivToGetInfo001;
