const LukasCreateARadioButtonFormControlAndSaveItsStateWithLocalstorage001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const showAnswers =
				document.querySelector<HTMLInputElement>("#show_answers");
			const hideAnswers =
				document.querySelector<HTMLInputElement>("#hide_answers");
			const answers = document.querySelectorAll(".answer span");
			if (showAnswers && hideAnswers && answers) {
				window.addEventListener("load", () => {
					const savedState = localStorage.getItem("lukasRadioState");
					if (savedState === "show") {
						showAnswers.setAttribute("checked", "checked");
						hideAnswers.removeAttribute("checked");
						// console.log("It is Saved");
					} else if (savedState === "hide") {
						hideAnswers.setAttribute("checked", "checked");
						showAnswers.removeAttribute("checked");
					}
				});
				const saveState = () => {
					if (showAnswers.checked) {
						localStorage.setItem("lukasRadioState", "show");
						answers.forEach((answer) => {
							answer.classList.remove("hidden");
						});
					} else if (hideAnswers.checked) {
						localStorage.setItem("lukasRadioState", "hide");
						answers.forEach((answer) => {
							answer.classList.add("hidden");
						});
					}
				};
				showAnswers.addEventListener("change", saveState);
				hideAnswers.addEventListener("change", saveState);
			}
		});

		// OTHER CODE HERE:#
		console.log(localStorage.getItem("lukasRadioState"));

		return /*html*/ `
	<div class="solution flex flex-col gap-4">
		<div>
			<label for="show_answers">show answers</label>
			<input type="radio" id="show_answers" name="answers">
		</div>
		<div>
			<label for="hide_answers">hide answers</label>
			<input type="radio" id="hide_answers" name="answers">
		</div>
		<div>
			<p class="question">What is 2+2?</p>
			<p class="answer text-green-500">-> <span class="hidden">4</span></p>
			<p class="question">What is 2*12?</p>
			<p class="answer text-green-500">-> <span class="hidden">24</span></p>
			<p class="question">What is 27/3?</p>
			<p class="answer text-green-500">-> <span class="hidden">9</span></p>
			<p class="question">What is 152-63?</p>
			<p class="answer text-green-500">-> <span class="hidden">89</span></p>
		</div>
	</div>
`;
	};
export default LukasCreateARadioButtonFormControlAndSaveItsStateWithLocalstorage001;
