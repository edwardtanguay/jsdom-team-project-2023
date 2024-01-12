import orders from '../../data/orders.json';
import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ListOrdersWithDaysAgo = () => {
	return /*html*/`
<div>
	<div class="instructions">List orders with days ago as a table, use day.js.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/ListOrdersWithDaysAgo.ts" target="_blank">view solution</a></div>
	
	<div class="solution">

		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th class="p-3">Order ID</th>
					<th class="p-3">Order Date</th>
					<th class="p-3">Days Ago</th>
				</tr>
			</thead>
			<tbody>
			${orders.slice(0, 10).map(order => {
				return `
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
					<td class="p-3">${order.orderID}</td>
					<td class="p-3">${order.orderDate.substring(0,10)}</td>
					<td class="p-3">${dayjs(order.orderDate.substring(0,10)).fromNow()}</td>
				</tr>`
			}).join('')}
			</tbody>
		</table>

	</div>
</div>
`;
}
export default ListOrdersWithDaysAgo;