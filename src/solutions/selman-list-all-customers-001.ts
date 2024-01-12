import customers from "../data/customers.json";
const SelmanListAllCustomers001 = () => {
	return /*html*/ `
	<div class="solution">
		<ul>
	${customers
		.map((customer) => {
			return /*html*/ `<li>${customer.companyName}<li>`;
		})
		.join("")}  </ul>


	</div>
`;
};
export default SelmanListAllCustomers001;
