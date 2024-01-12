import employees from '../../data/employees.json';
import * as tools from "../../tools";


// id: 3
// author: edward
// kind: original

interface IIdEmployee {
	fullName: string;
	idCode: string;
}

const getRandomNumberOfDigits = (length: number) => {

	let digitString = '';
	for (let x = 1; x <= length; x++) {
		const randomDigit = Math.floor(Math.random() * 10);
		digitString += randomDigit;
	}
	return digitString;
}

const idEmployees: IIdEmployee[] = employees.sort((a,b) => a.lastName > b.lastName ? 1 : -1).map((emp, index) => {
	return {
		fullName: `${emp.firstName} <span class="text-blue-900 font-bold">${emp.lastName}</span>`,
		idCode: `${emp.firstName.charAt(0).toLowerCase()}_${emp.lastName.toLowerCase()}_${getRandomNumberOfDigits(4)}_${String(index + 1).padStart(3, '0')}`
	}
});

const ListOfEmployeesWithIdCode = () => {
  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
	return /*html*/`
<div>
	<div class="instructions">List employees with full name, and a code that takes this form: <b>firstinitial_lastname_random4numbers_3numbercounter</b>, e.g. <code>h_schmidt_9827_001</code> and sort the items by last name.</div>
	<div class="solutionLink"><a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/list-of-employees-with-id-code.ts" target="_blank">view solution</a></div>
		<div class="solution">
		<div>CREATE SOLUTION HERE</div>
		<div>
	</div>
</div>
`; 
}

export default ListOfEmployeesWithIdCode;