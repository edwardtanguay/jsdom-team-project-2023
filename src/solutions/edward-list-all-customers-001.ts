import customers from '../data/customers.json';

const EdwardListAllCustomers001 = () => {
return /*html*/`
	<div class="solution">
		<ul>
			${customers.map(m => `<li>${m.companyName}</li>`).join('')}
		</ul>
	</div>
`;
}
export default EdwardListAllCustomers001;