import employees from '../../data/employees.json';
import * as tools from "../../tools";


 const ListUsaEmployees = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
	return /*html*/`
<div>
	<div class="instructions">List Usa employees.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/list-usa-employees.ts" target="_blank">view solution</a></div>
	<div class="solution">

	<div class=" flex flex-col gap-10">
		${employees.filter((emp) => {
		return emp.address.country === "USA"
	}).map((emp) => {
		return /*html */`
			
			<div class = "  odd:bg-slate-400">${emp.firstName} ${emp.lastName} ${emp.address.country} ${emp.address.phone}</div>
			
		
			`
	}).join("")}
	</div>

</div>
`;
}

export default ListUsaEmployees;