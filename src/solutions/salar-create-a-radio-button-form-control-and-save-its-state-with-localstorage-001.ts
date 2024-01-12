const SalarCreateARadioButtonFormControlAndSaveItsStateWithLocalstorage001 = () => {
	let answers = ["1-(12)","2-(Berlin)","3-(an einem Tag)","4-(Banana)"];
	setTimeout(() => {
		
		let answersState = "block";
		const answersElement = document.getElementById('answers') as HTMLInputElement;
		answersElement.style.display = answersState
		const showAnsweresRadio = document.getElementById('showAnswers') as HTMLInputElement;
		const hideAnswersRadio = document.getElementById('hideAnswers') as HTMLInputElement;
		if (showAnsweresRadio) {
			showAnsweresRadio.addEventListener('change', ()=>handleRadioChange());
		}
		if (hideAnswersRadio) {

			hideAnswersRadio.addEventListener('change', ()=>handleRadioChange());
		}

		function handleRadioChange() {
			answersState === "none" ? answersState = "block" : answersState = "none"
			console.log(answersState);
			answersElement.style.display = answersState

		}
	});

	return /*html*/`
	<div class="solution">
		<h1>Show / Heiden Answer</h1>
		<input type="radio" id= "showAnswers" name="answerMode" value= "show" checked>
		<label for="showAnswers"> Show Answer</label>
		<input type="radio" id= "hideAnswers" name= "answerMode" value="hide">
		<label for="hideAnswers">Hide Answer</label>
		<div id="question" class="text-red-400">
			<h2>Question ?</h2>
				<li>1:was ist 2+2*5?</li>
				<li>2.was ist Hauptstadt von Germany?</li>
				<li>3.Wann bist du geboren ?</li>
				<li>4.Was ist die beliebsten Obst in der welt ? </li>
		</div>
		<div id="answers" class="text-green-600">
			<h2>Answers :</h2>
			<ul>
				${answers.map(answer=>(
					`<li>${answer}</li>`
				)).join("")}
			</ul>
			</div>
	</div>
`;
};
export default SalarCreateARadioButtonFormControlAndSaveItsStateWithLocalstorage001;