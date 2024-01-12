import orders from '../../data/orders.json';
import * as tools from "../../tools";


const ListFirst10OrdersWithShippingAddress = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
	  return /*html*/ `
<div>
	<div class="instructions">List all customers by displaying companyName in a UL/LI list.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/list-all-customers.ts" target="_blank">view solution</a></div>
	<div class="solution">
	<div>CREATE SOLUTION HERE</div>
</div>
`;
};

export default ListFirst10OrdersWithShippingAddress;