const EdwardPb2Exam002CreateObjectLiteralWithMethod001 = () => {

	interface IPerson {
		name: string;
		age: number;
		display: () => {}
	}

	const changeAge = (pers:IPerson) => {
		pers.age = 66;
	}

	// CODE HERE
	const person = {
		name: 'Hans Hammerschmidt',
		age: 30,
		display: function () {
			return `${this.name} is ${this.age} years old.`;
		}
	};
	changeAge(person)

	return /*html*/`
	<div class="solution">
		${person.display()}	
	</div>
`;
}
export default EdwardPb2Exam002CreateObjectLiteralWithMethod001;