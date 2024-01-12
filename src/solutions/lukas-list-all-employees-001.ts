import employees from "../data/employees.json";

const LukasListEmployees001 = () => {
	return /*html*/ `
	<div class="solution">
		<ul>${employees
			.map((employee) => {
				return /*html*/ `<li class="text-orange-700">${employee.firstName} ${employee.lastName}</li>`;
			})
			.join("")}</ul>
	</div>
`;
};
export default LukasListEmployees001;
