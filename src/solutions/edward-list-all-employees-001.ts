import employees from '../data/employees.json';

const EdwardListEmployees001 = () => {
return /*html*/`
	<div class="solution">
		<ul>
			${employees.map(m => `<li>${m.firstName} ${m.lastName}</li>`).join('')}
		</ul>
	</div>
`;
}
export default EdwardListEmployees001;