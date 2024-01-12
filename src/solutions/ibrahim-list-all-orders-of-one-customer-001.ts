import orders from '../data/orders.json';
import customers from '../data/customers.json';
import products from '../data/products.json';


const IbrahimListAllOrdersOfOneCustomer001 = () => {

	const customerID = 'TORTU';
	const customerName = customers.find(m => m.customerID === customerID)?.companyName;
	const customerOrders = orders.filter(m => m.customerID === customerID);

	return /*html*/`
	<div class="solution">
		<div>CUSTOMER: ${customerName} (${customerID})</div>
		<ul>
			${customerOrders.map(ord => {
		return `<li><strong>Order #${ord.orderID}</strong>
					<ul>
						${ord.details.map(detail => {
			return `<li>${products.find(m => m.productID === detail.productID)?.name}</li>`;
		}).join('')}
					</ul>
				</li>`;
	}).join('')}
		</ul>
	</div>
`;
}

export default IbrahimListAllOrdersOfOneCustomer001;