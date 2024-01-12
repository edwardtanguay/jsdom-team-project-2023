import dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const ListOrdersWithDaysAgo = () => {
	return /*html*/`
<div>
	<div class="instructions">List orders with days ago as a table, use day.js.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/ListOrdersWithDaysAgo.ts" target="_blank">view solution</a></div>
	<div class="solution">
		<div>CREATE SOLUTION HERE</div>
	</div>
</div>
`;
}
export default ListOrdersWithDaysAgo;