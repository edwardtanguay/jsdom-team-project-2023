import { IAppData } from "../interfaces";
import * as tools from '../tools';

export const AreaLatest = (appData: IAppData) => {
	const _exercises = [...appData.exercises];
	_exercises.sort((a,b) => a.whenCreated < b.whenCreated ? 1 : -1)	
	return /*html*/ `
		<ul class="ml-6 list-disc text-indigo-400">
			${_exercises.map(exercise => {
				return `<li class="p-1 "><a class=" text-white tracking-wide hover:text-indigo-400 " href="${exercise.idCode}"><span class="text-yellow-200">${tools.getShortDay(exercise.whenCreated)} -</span> ${exercise.title}</a>
			${exercise.solutionAuthors.length > 0 ? `
	<ul>
		${exercise.solutionAuthors.map(solutionAuthor => {
			return `<span class="text-orange-400">${solutionAuthor}</span>`;
		}).join('<span class="text-gray-500">,<span> ')}
	</ul>
			` : `<div>No solutions yet, be the first!</div>`}
				</li>`;
	}).join('')}
		</ul>
	`;
}