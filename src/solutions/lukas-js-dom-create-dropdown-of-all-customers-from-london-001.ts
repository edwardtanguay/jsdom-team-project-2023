import customers from "../data/customers.json";
const LukasJsDomCreateDropdownOfAllCustomersFromLondon001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const div = document.querySelector<HTMLDivElement>(".solution");
		const label = document.createElement("label");
		label.htmlFor = "customers";
		label.innerText = "Customers from London:";
		if (div) {
			div.appendChild(label);
		}

		label.classList.add("flex", "flex-col", "gap-3");

		const customersFromLondon = customers.filter((m) => {
			return m.address.city === "London";
		});

		const select = document.createElement("select");
		label.appendChild(select);

		customersFromLondon.forEach((array) => {
			const option = document.createElement("option");
			option.value = array.customerID;
			option.innerText = array.companyName;
			select.appendChild(option);
		});
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
	</div>
`;
};
export default LukasJsDomCreateDropdownOfAllCustomersFromLondon001;
