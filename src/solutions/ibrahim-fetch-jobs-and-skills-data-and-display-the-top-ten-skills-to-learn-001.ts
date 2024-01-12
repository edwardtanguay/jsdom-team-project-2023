import axios from "axios";

interface IJob {
	skillList: string;
}
interface ISkill {
	idCode: string;
	name: string;
}
const IbrahimFetchJobsAndSkillsDataAndDisplayTheTopTenSkillsToLearn001 = () => {

setTimeout(async () => {
	
	const jobsUrl = "https://edwardtanguay.vercel.app/share/jobs.json";
	const skillsUrl = "https://edwardtanguay.vercel.app/share/skills.json";
  
	
	const jobsData = (await axios.get(jobsUrl)).data;
	const skillsData = (await axios.get(skillsUrl)).data;
  
	
	const skillsAmount = jobsData.reduce((acc, job) => {
	  const skills = job.skillList.split(",").map(skill => skill.trim());

	  skills.forEach(skill => {
		if (acc[skill]) {
		  acc[skill]++;
		} else {
		  acc[skill] = 1;
		}
	  });
	  return acc;
	}, {});
  
	
	const skillsAmountArray = Object.entries(skillsAmount);
	skillsAmountArray.sort((a, b) => b[1] - a[1]);
  
	
	const mostUsedSkills = skillsAmountArray.slice(0, 10).map(([skillId, amount]) => {
	  const skillName = skillsData.find(skill => skill.idCode === skillId).name;
	  const skillPercentage = ((amount / jobsData.length) * 100).toFixed(1);
	  return { skill: skillName, amount: skillPercentage };
	});
  
	
	// console.log(mostUsedSkills);

	
	const jobsAmount = document.querySelector(".job_amount");
	if (jobsAmount) {
	  jobsAmount.querySelector = jobsData.length.toString();
	}
  
	
	const list = document.querySelector(".list");
	if (list) {
	  list.innerHTML = mostUsedSkills
		.map(skill => {
		  return `<li>${skill.amount}% ${skill.skill}</li>`;
		})
		.join("");
	}
  });
  
  
  return `
	<div class="solution">
	  <h2>Top 10 Webentwickler-Fähigkeiten basierend auf <span class="job_amount">0</span> verschiedenen Jobs</h2>
	  <ul class="list">
	  </ul>
	</div>
  `;
  
}
export default IbrahimFetchJobsAndSkillsDataAndDisplayTheTopTenSkillsToLearn001;