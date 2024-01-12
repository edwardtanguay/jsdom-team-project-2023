import skills from "../data/other/skills.json"; // 251 entries

const LukasJsDomCreateAWebDeveloperSkillQuizWithMouseover001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		let hoverCount = 0;
		const solution = document.querySelector<HTMLDivElement>(".solution");
		const loggedHovers =
			document.querySelector<HTMLDivElement>(".logged_hovers");
		if (solution && loggedHovers) {
			for (let i = 0; i < 5; i++) {
				const randomEntry = Math.floor(Math.random() * skills.length);
				let skill = document.createElement("div");
				skill.innerText = `${skills[randomEntry].name}  `;
				skill.classList.add("skill", "flex");
				solution.appendChild(skill);
				let skillInfo = document.createElement("p");
				skillInfo.innerText = `| ${skills[randomEntry].description}`;
				skillInfo.classList.add("hidden");
				skill.appendChild(skillInfo);
			}
			const skillDivs =
				document.querySelectorAll<HTMLDivElement>(".skill");
			skillDivs.forEach((skill) => {
				const skillInfo = skill.querySelector("p");
				if (skillInfo) {
					skill.addEventListener("mouseenter", () => {
						skill.classList.add("text-red-500");
						loggedHovers.innerText = `Hover count: ${++hoverCount}`;
						skillInfo.classList.remove("hidden");
					});
					skill.addEventListener("mouseout", () => {
						skill.classList.remove("text-red-500");
						skillInfo.classList.add("hidden");
					});
				}
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution flex flex-col gap-4">
	</div>
	<div class="logged_hovers">
	Hover count: 0
	</div>
`;
};
export default LukasJsDomCreateAWebDeveloperSkillQuizWithMouseover001;
