const SelmanPb2Exam002CreateObjectLiteralWithMethod001 = () => {
	// CODE HERE

	interface IPerson {
		name: string;
		age: number;
		describe: () => string;
	}

	const person: IPerson = {
		name: "Hans Hammerschmidt",
		age: 30,
		describe: function () {
			return `${this.name} is ${this.age} years old.`;
		},
	};

	return /*html*/ `
		<div class="solution">
			${person.describe()}
		</div>
	`;
};
export default SelmanPb2Exam002CreateObjectLiteralWithMethod001;
