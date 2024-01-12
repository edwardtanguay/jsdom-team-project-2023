import employees from '../data/employees.json';

const IbrahimListAllEmployees001 = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		
	});

	// OTHER CODE HERE:
	
	
	return /*html*/`
	<div class="solution">
		<ul>
			${employees.map(m => `<li>${m.firstName} ${m.lastName}</li>`).join('')}
		</ul>
	</div>
`;
}
export default IbrahimListAllEmployees001;