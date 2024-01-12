const LukasJsDomChangeStylesOnButtonClick001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const toggleNouns = () => {
			const nouns = document.querySelectorAll(".nouns");
			nouns.forEach((element) => {
				element.classList.toggle("text-red-500");
			});
		};

		const toggleVerbs = () => {
			const verbs = document.querySelectorAll(".verbs");
			verbs.forEach((element) => {
				element.classList.toggle("text-green-500");
			});
		};
		const nounsButton = document.getElementById("nouns_btn");

		if (nounsButton) {
			nounsButton.addEventListener("click", toggleNouns);
		}
		const verbsButton = document.getElementById("verbs_btn");
		if (verbsButton) {
			verbsButton.addEventListener("click", toggleVerbs);
		}
	});
	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
	<div class="flex gap-4 bg-white text-black rounded-full justify-center">
		<button id="nouns_btn" >Nouns</button>
		<button id="verbs_btn" >Verbs</button>
	</div>
		<p>
		The <span class="nouns">nuclear energy programs</span> of <span class="nouns">Venezuela</span> <span class="verbs">started</span> during the <span class="nouns">1950s</span>  but currently there are no <span class="verbs">active</span> <span class="nouns">nuclear power facilities</span>. <span class="nouns">Most</span> of <span class="nouns">Venezuela's nuclear science activities</span> are <span class="verbs">carried out</span> at <span class="nouns">Venezuelan Institute</span> for <span class="nouns">Scientific Research</span> (IVIC).
		</p>	
	</div>
`;
};
export default LukasJsDomChangeStylesOnButtonClick001;
