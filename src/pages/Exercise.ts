import { IAppData, IExercise } from "../interfaces";
import axios from "axios";

export const Exercise = (appData: IAppData, exercise: IExercise) => {
	const solutions = appData.solutions.filter(
		(s) => s.exerciseIdCode === exercise.idCode
	);

	return /* html */ `
	<div class="pageExercise grid grid-cols-3 gap-4">
    <fieldset class="exercise bg-neutral-900 p-4 border border-neutral-800 shadow-sm col-span-3 md:col-span-2">
	<legend class="bg-black text-white p-2 rounded-xl m-auto border border-neutral-700 shadow-sm">Instructions</legend>
	${exercise?.descriptionHtml}
	<ul>
		<li class="italic text-yellow-200">consider: ${exercise.categories.split(',').map(m => `<code>${m}</code>`).join(', ')}</li>
		<li class="text-yellow-200 italic">be sure to fix all JavaScript errors that TypeScript finds for you</li>
		<li class="text-yellow-200 italic">when finished, extend your solution in some creative way to help others learn more</li>
	</ul>
				<img class="mt-6 p-2 rounded-xl m-auto border border-neutral-800 shadow-sm object-fill" src="${`images/exercises/${exercise?.idCode}.png`}"/>
			</fieldset>
			<section class="p-4 text-1xl col-span-3 md:col-span-1">

			<div class="p-4 shadow-xl bg-neutral-900 mb-4">
			${solutions.length > 0 ? ` 
			<h4 class="text-2xl mb-4 text-indigo-400">Solutions:</h4>
				${solutions
				.map((solution) => {
					return `<div class="mb-2"><i class="fa fa-link bg-orange-300 text-black rounded-full p-2" aria-hidden="true"></i>  <a class="text-orange-400 tracking-wide hover:text-indigo-400" href="${solution.idCode}"> ${solution.shortTitle} </a></div>`;
				})
				.join("")}
			` : '<p class="text-center text-blue-300 text-2xl italic">No solutions yet, be the first!</p>'}
		</div>

				<div class="p-4 shadow-xl bg-neutral-900">
					<div class="text-base mt-3">To create your own solution, type your <b>first name</b>:</div>
					<form class="mt-5 pb-5">
						<input class="exerciseIdCode" value="${exercise?.idCode}" type="hidden"/>
						<input class="firstName rounded-md text-black text-sm p-2  w-full mb-4" placeholder="first name" type="text" />
						<button class="btnCreate hover:bg-indigo-900 p-2  w-full bg-indigo-400 hover:text-white transition-all ease-in-out  duration-300 rounded-md">Create</button>
					</form>
				</div>
			</section>
		</div>
	`;
};

export const attachExerciseEvents = () => {
	const exerciseIdCodeElem =
		document.querySelector<HTMLInputElement>(".exerciseIdCode");
	const firstNameElem =
		document.querySelector<HTMLInputElement>(".firstName");
	const btnCreateElem =
		document.querySelector<HTMLButtonElement>(".btnCreate");
	const backendUrl = "http://localhost:4224";

	if (exerciseIdCodeElem && firstNameElem && btnCreateElem) {
		btnCreateElem.addEventListener("click", async (e: Event) => {
			e.preventDefault();
			setTimeout(() => {
				location.reload();
			}, 500);
			await axios.post(
				`${backendUrl}/add-exercise`,
				{
					exerciseIdCode: exerciseIdCodeElem.value,
					firstName: firstNameElem.value.trim(),
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
		});
	}
};
