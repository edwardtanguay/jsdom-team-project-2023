import axios from "axios";

interface IJob {
	skillList: string;
}
interface ISkill {
	idCode: string;
	name: string;
}

const LukasFetchJobsAndSkillsDataAndDisplayTheTopTenSkillsToLearn001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(async () => {
		const jobsUrl = "https://edwardtanguay.vercel.app/share/jobs.json";
		const skillsUrl = "https://edwardtanguay.vercel.app/share/skills.json";
		const jobsData = (await axios.get(jobsUrl)).data;
		const skillsData = (await axios.get(skillsUrl)).data;
		const skillsAmount = jobsData.reduce((acc: any, job: IJob) => {
			const skills = job.skillList
				.split(",")
				.map((skill: string) => skill.trim());
			skills.forEach((skill: string) => {
				if (acc[skill]) {
					acc[skill]++;
				} else {
					acc[skill] = 1;
				}
			});
			// const filteredSkills = skills.filter((skill: string) => {});
			return acc;
		}, {});
		const skillsAmountArray = Object.entries(skillsAmount);
		skillsAmountArray.sort((a: any, b: any) => b[1] - a[1]);
		const mostUsedSkills = skillsAmountArray.slice(0, 10).map((m) => {
			return {
				skill: skillsData.find(
					(_skill: ISkill) => _skill.idCode === m[0]
				).name,
				amount: ((Number(m[1]) / jobsData.length) * 100).toFixed(1),
			};
		});

		console.log(mostUsedSkills);

		//console.log(jobsData, skillsData);
		const jobsAmount =
			document.querySelector<HTMLSpanElement>(".job_amount");
		if (jobsAmount) {
			jobsAmount.innerText = jobsData.length.toString();
		}
		const list = document.querySelector<HTMLUListElement>(".list");
		if (list) {
			list.innerHTML = mostUsedSkills
				.map((skill: any) => {
					return /*html*/ `
				<li>
				${skill.amount}% ${skill.skill}
				</li>
				`;
				})
				.join("");
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
		<h2>Top 10 web developer skills based on <span class="job_amount">0</span> different Jobs</h2>
		<ul class="list">
		</ul>
	</div>
`;
};
export default LukasFetchJobsAndSkillsDataAndDisplayTheTopTenSkillsToLearn001;
