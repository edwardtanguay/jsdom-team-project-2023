import employees from '../../data/employees.json';
import * as tools from "../../tools";


// id: 1
// author: edward
// kind: original

const ListEmployees = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
	return /*html*/`
<div>
	<div class="instructions">EXERCISE #1: Create a UL/LI list that displays the first and last name of each employee.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/page-list-employees.ts" target="_blank">view solution</a></div>
	<div class="solution">
	<div>CREATE SOLUTION HERE</div>
	</div>
</div>
`; 
}

export default ListEmployees;