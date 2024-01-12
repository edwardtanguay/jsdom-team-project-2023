import customers from "../../src/data/customers.json";

// interface ICustomer {
// 	customerID: "string";
// 	companyName: "string";
// 	contactName: "string";
// 	contactTitle: "string";
// 	address: {
// 		street: "string";
// 		city: "string";
// 		region: "string";
// 		postalCode: "string";
// 		country: "string";
// 		phone: "string";
// 	};
// }

const LukasSpa1Exam006ToggleStyleOfEmployeeNamesWithDoubleClick001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const customerList =
			document.querySelector<HTMLUListElement>(".solution ul");
		if (customerList) {
			customers.forEach((customer) => {
				const customerListItem = document.createElement("li");
				customerListItem.innerText = `${customer.contactName}`;
				customerListItem.style.userSelect = "none";
				customerListItem.addEventListener("dblclick", () => {
					if (customerListItem.style.fontWeight === "bold") {
						customerListItem.style.fontWeight = "normal";
						customerListItem.style.color = "white";
					} else {
						customerListItem.style.fontWeight = "bold";
						customerListItem.style.color = "red";
					}
				});
				customerList.appendChild(customerListItem);
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
	<ul>
	</ul>
	</div>
`;
};
export default LukasSpa1Exam006ToggleStyleOfEmployeeNamesWithDoubleClick001;
