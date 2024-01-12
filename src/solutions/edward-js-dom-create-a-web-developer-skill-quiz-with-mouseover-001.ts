import _skills from '../data/other/skills.json';
import * as tools from '../tools';

const skills = tools.shuffle(_skills).slice(0, 5);

const EdwardJsDomCreateAWebDeveloperSkillQuizWithMouseover001 = () => {
	// x import skills and show all in UL/LI
	// x randomize skills
	// x show only 5
	// x mouseover with console.log
	// x high description first and mouseover show
	// x mouseovers variable
	// .. increment count

	setTimeout(() => {
		const skillsElems = document.querySelectorAll<HTMLLIElement>('.skillsList li');
		const loggedMouseoverCountElem = document.querySelector<HTMLSpanElement>('.loggedMouseoverCount');
		let count = 0;

		if (skillsElems && loggedMouseoverCountElem) {
			loggedMouseoverCountElem.innerText = String(count);
			for (const skillElem of skillsElems) {
				skillElem.addEventListener('mouseenter', () => {
					const descriptionElem = skillElem.querySelector<HTMLSpanElement>('.description');
					if (descriptionElem) {
						descriptionElem.style.display = 'inline';
					}
					count++;
					loggedMouseoverCountElem.innerText = String(count);
				})
				skillElem.addEventListener('mouseleave', () => {
					const descriptionElem = skillElem.querySelector<HTMLSpanElement>('.description');
					if (descriptionElem) {
						descriptionElem.style.display = 'none';
					}
				})
			}
		}
	});

	return /*html*/`
	<style>
		.logData {
			justify-content: flex-end;
		}
	</style>
	<div class="solution w-full">
		<div class="skillsArea">
			<ul class="skillsList border rounded p-4 list-disc">
				${skills.map(skill => {
		return `<li class="mb-2 ml-3 text-sm"><span class="text-yellow-300">${skill.name}</span> <span class="description hidden">- ${skill.description}</span></li>`;
	}).join('')}
			</ul>
		</div>
		<div class="logData flex">
			<div class="mt-3">Logged mouseovers: <span class="loggedMouseoverCount">0</span></div>
		</div>
	</div>
`;
}
export default EdwardJsDomCreateAWebDeveloperSkillQuizWithMouseover001;