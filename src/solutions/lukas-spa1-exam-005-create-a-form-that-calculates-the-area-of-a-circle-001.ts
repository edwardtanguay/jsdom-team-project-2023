const LukasSpa1Exam005CreateAFormThatCalculatesTheAreaOfACircle001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const form = document.querySelector("form");
		if (form) {
			const radiusInput =
				document.querySelector<HTMLInputElement>("#radius");
			const calculateButton =
				document.querySelector<HTMLButtonElement>(".calculate");
			console.log(calculateButton);
			const calculatedArea =
				document.querySelector<HTMLParagraphElement>(
					".calculated_area"
				);

			if (radiusInput && calculateButton && calculatedArea) {
				console.log(radiusInput, calculateButton, calculatedArea);
				form.addEventListener("submit", (e) => {
					e.preventDefault();
					const radius = Number(radiusInput.value);
					const area = Math.PI * radius ** 2;
					calculatedArea.innerText = `The area is ${area.toFixed(
						2
					)} cm²`;
				});
			}
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
		<form action="" class="flex gap-4 flex-row">
			<div>
				<label for="radius">
					Radius:
				</label>
				<div class="flex gap-2">
					<input type="number" name="radius" id="radius" class="text-black">
					<p class="">cm</p>
				</div>
			</div>
			<button class="calculate" >Calculate Area</button>
		</form>
		<p class="calculated_area"></p>
	</div>
`;
};
export default LukasSpa1Exam005CreateAFormThatCalculatesTheAreaOfACircle001;
