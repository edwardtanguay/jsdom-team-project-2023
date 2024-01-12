// Nur Durch Code Beispiel von Tomislav Möglich! Vielen Dank!
const LukasSpa1Exam003CreateAQuizMakerFormThatBlanksOutWordsInASentence001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const sentence =
				document.querySelector<HTMLInputElement>("#sentence");
			const marker = document.querySelector<HTMLInputElement>("#marker");
			const quizSentence =
				document.querySelector<HTMLParagraphElement>(".quiz_sentence");
			const createQuiz =
				document.querySelector<HTMLButtonElement>(".create_quiz");
			if (sentence && marker && quizSentence && createQuiz) {
				createQuiz.addEventListener("click", (e) => {
					e.preventDefault();
					const regEx = new RegExp(
						`\\${marker.value[0]}(.*?)\\${marker.value[1]}`,
						"g"
					);
					quizSentence.innerText = sentence.value.replace(
						regEx,
						(_) => "____"
					);
				});
			}
		});

		// OTHER CODE HERE:

		return /*html*/ `
	<div class="solution">
<form action="" class ="flex flex-col gap-4">
<label for="sentence" class="flex flex-col gap-2">
	Sentence
	<input type="text" id="sentence" class="text-black">
</label>
<label for="marker" class="gap-2">Marker
<input type="text" id="marker" class="text-black">
</label>
<button class="create_quiz w-1/2 bg-white text-black rounded-full">Create Quiz Question</button>
</form>
<p class="quiz_sentence"></p>
</div>
`;
	};
export default LukasSpa1Exam003CreateAQuizMakerFormThatBlanksOutWordsInASentence001;
