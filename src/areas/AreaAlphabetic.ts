import { IAppData } from "../interfaces";

export const AreaAlphabetic = (appData: IAppData) => {
	return /*html*/ `
		<ul class="ml-6 list-decimal text-indigo-400">
			${appData.exercises.map(exercise => {
		return `<li class="p-1 "><a class=" text-white tracking-wide hover:text-indigo-400 " href="${exercise.idCode}">${exercise.title}</a></li>`;
	}).join('')}
		</ul>
	`;
}