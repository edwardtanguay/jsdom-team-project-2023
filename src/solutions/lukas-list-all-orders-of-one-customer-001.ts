import customers from "../data/customers.json";
import orders from "../data/orders.json";
import products from "../data/products.json";

const LukasListAllOrdersOfOneCustomer001 = () => {
	// CODE HERE
	const customerID = "TORTU";
	const customerName = customers.find(
		(m) => m.customerID === customerID
	)?.companyName;
	const customerOrders = orders.filter((m) => m.customerID === customerID);

	return /*html*/ `
	<div class="solution">
		<h2 class="text-2xl">Customer: ${customerName} (${customerID})</h2>
		<ul>
	${customerOrders
		.map(
			(m) => /*html */ `
		<li class="mt-3 font-bold">
		Order #${m.orderID}
		<ul class="font-normal">
		${m.details
			.map((detail) => {
				return `<li>${
					products.find((m) => m.productID === detail.productID)?.name
				}</li>`;
			})
			.join(" ")}	
		</ul>
		</li>`
		)
		.join(" ")}
		</ul>
	</div>
`;
};
export default LukasListAllOrdersOfOneCustomer001;
