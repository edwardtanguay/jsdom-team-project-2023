const MeladJsDomCreateAWebDeveloperSkillQuizWithMouseover001 = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		function shuffle(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}
	
		const createSkillList = () => {
			const skills = [
				{
					"idCode": "angular",
					"name": "Angular",
					"url": "https://onespace.pages.dev/techItems?id=36",
					"description": "Together with React and Vue.js, one of the three most popular JavaScript frameworks."
				},
				{
					"idCode": "cicd",
					"name": "CI/CD",
					"url": "https://about.gitlab.com/topics/ci-cd",
					"description": "The combined practices of continuous integration (CI) and continuous deployment (CD)."
				},
				{
					"idCode": "react",
					"name": "React",
					"url": "https://onespace.pages.dev/techItems?id=2",
					"description": "currently the most popular front-end JavaScript framework along with Vue and Angular"
				},
				{
					"idCode": "swagger",
					"name": "Swagger",
					"url": "https://en.wikipedia.org/wiki/Swagger_(software)",
					"description": "a suite of tools for API developers created in 2011"
				},
				{
					"idCode": "rest",
					"name": "REST",
					"url": "https://en.wikipedia.org/wiki/Representational_state_transfer",
					"description": "a way to make services on a web available to software and other websites"
				},
				
			];
	
			
			const shuffledSkills = shuffle(skills);
	
			
			const selectedSkills = shuffledSkills.slice(0, 5);
	
			
			const skillsContainer = document.createElement('div');
			skillsContainer.className = 'skill-container';
	
			
			const skillsList = document.createElement('ul');
	
			
			const description = document.createElement('div');
			description.id = 'description';
	
			
			const hoverCount = document.createElement('div');
			hoverCount.id = 'hover-count';
			let count = 0;
			hoverCount.textContent = `Hover Count: ${count}`;
	
			selectedSkills.forEach((skill) => {
				const li = document.createElement('li');
				li.textContent = skill.name;
	
				li.addEventListener('mouseover', () => {
					description.textContent = skill.description;
					description.style.display = 'block';
					count++;
					hoverCount.textContent = `Hover Count: ${count}`;
				});
	
				li.addEventListener('mouseleave', () => {
					description.style.display = 'none';
				});
	
				skillsList.appendChild(li);
			});
	
			
			skillsContainer.appendChild(skillsList);
			skillsContainer.appendChild(description);
			skillsContainer.appendChild(hoverCount);
	
			return skillsContainer;
		};
	
		
		document.body.appendChild(createSkillList());
	
		
	

	});

	// OTHER CODE HERE:
	
	
	return /*html*/`
	<div class="solution">
		Create your solution in the file: <b>src/solutions/melad-js-dom-create-a-web-developer-skill-quiz-with-mouseover-001.ts</b>
	</div>
`;
}
export default MeladJsDomCreateAWebDeveloperSkillQuizWithMouseover001;