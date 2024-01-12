import customers from "../data/customers.json";

const LukasListAllCustomers001 = () => {
	// CODE HERE
	const display = [...customers];

	return /*html*/ `
	<div class="solution">
		<ul>
			${display
				.map(
					(m) => /*html */ `<li>
${m.companyName}				
			</li>`
				)
				.join(" ")}
		</ul>
	</div>
`;
};
export default LukasListAllCustomers001;
