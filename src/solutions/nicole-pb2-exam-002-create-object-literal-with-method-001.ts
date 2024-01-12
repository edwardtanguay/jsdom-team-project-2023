const NicolePb2Exam002CreateObjectLiteralWithMethod001 = () => {

	// CODE HERE

	const person = {
		name : 'Hans Hammerschmidt',
		age : 30,
	    display: function () {
			return `${this.name} is ${this.age} years old.`;
		}
	};  


	return /*html*/`
	<div class="solution">
		${person.display()}
	</div>
`;
}
export default NicolePb2Exam002CreateObjectLiteralWithMethod001;