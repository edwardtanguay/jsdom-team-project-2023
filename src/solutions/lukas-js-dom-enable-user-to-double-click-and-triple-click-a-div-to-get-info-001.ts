const LukasJsDomEnableUserToDoubleClickAndTripleClickADivToGetInfo001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const divDouble = document.querySelector<HTMLDivElement>(".div_double");
		const pDouble = document.querySelector<HTMLParagraphElement>(
			".container_double p"
		);
		const divTriple = document.querySelector<HTMLDivElement>(".div_triple");
		const pTriple = document.querySelector<HTMLParagraphElement>(
			".container_triple p"
		);
		const containerDouble =
			document.querySelector<HTMLDivElement>(".container_double");
		const containerTriple =
			document.querySelector<HTMLDivElement>(".container_triple");
		if (
			divDouble &&
			divTriple &&
			containerDouble &&
			containerTriple &&
			pDouble &&
			pTriple
		) {
			pDouble.classList.add("hidden");
			pTriple.classList.add("hidden");
			divDouble.addEventListener("dblclick", () => {
				pDouble.classList.toggle("hidden");
			});
			divTriple.addEventListener("click", (e) => {
				if (e.detail === 3) {
					pTriple.classList.toggle("hidden");
				}
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution flex gap-4">
		<div class="container_double">
			<div class="div_double">Double-click for Info</div>
			<p>You Double clicked me!</p>
		</div>
		<div class="container_triple">
			<div class="div_triple">Triple-click for Info</div>
			<p>You Triple clicked me!</p>
		</div>
	</div>
`;
};
export default LukasJsDomEnableUserToDoubleClickAndTripleClickADivToGetInfo001;
