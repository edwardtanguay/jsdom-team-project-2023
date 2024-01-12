import employees from '../../data/employees.json';
import * as tools from "../../tools";


// id: 2
// author: edward
// kind: original

const PageListLondonEmployees = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
	return /*html*/`
<div>
	<div class="instructions">Create a UL/LI list that displays the full name of each employee from London.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/page-list-london-employees.ts" target="_blank">view solution</a></div>
	<div class="solution">
	<div>CREATE SOLUTION HERE</div>
	</div>
</div>
`; 
}

export default PageListLondonEmployees;