const ElviraPb2Exam002CreateObjectLiteralWithMethod001 = () => {

	// CODE HERE

//Objectliteral
const person = {
    name: "Elvira Dederer",
    age: 31,
    description: function() {
        return `${this.name} is ${this.age} years old.`;
    } 
};
const output = person.description();
//
	return /*html*/`
	<div class="solution">
 		${output}
	</div>
`;
}
export default ElviraPb2Exam002CreateObjectLiteralWithMethod001;