import orders from '../../data/orders.json';
import * as tools from "../../tools";


const ListFirst10OrdersWithShippingAddress = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
	return /*html*/`
<div>
	<div class="instructions">List first 10 orders with shipping address as shipping labels, shipName bold, the rest of the address lines below the ship name.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/ListFirst10OrdersWithShippingAddress.ts" target="_blank">view solution</a></div>
	<div class="solution">
			${orders.filter((m,i) => i < 10).map(order => {
				return `
				<div class="bg-white mb-2 p-3 rounded">
					<div class="font-bold hover:text-green-800 cursor-pointer">${order.shipName}</div>
					<div>${order.shipAddress.street}</div>
					<div></div>
					<div>${order.shipAddress.city}, ${order.shipAddress.region} ${order.shipAddress.postalCode}</div>
					<div>${order.shipAddress.country}</div>
				</div>`
			}).join('')}
	</div>
`; 
}

export default ListFirst10OrdersWithShippingAddress;