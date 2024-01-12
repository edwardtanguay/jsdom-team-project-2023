import customers from '../data/customers.json';

const IbrahimListAllCustomers001 = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {

	});

	return /*html*/`
	<div class="solution">
	<ul>${customers.map(customer => `<li>${customer.companyName} ${customer.address.city}${customer.contactName}</li>`).join('')}</ul>
	</div>
`;
}
export default IbrahimListAllCustomers001;