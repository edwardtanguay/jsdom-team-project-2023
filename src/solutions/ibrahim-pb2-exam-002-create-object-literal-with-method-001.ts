const IbrahimPb2Exam002CreateObjectLiteralWithMethod001 = () => {
	interface IPerson {
		name: string;
		age: number;
		displayText: () => string;
	  }
	  
	  const changeAge = (pers: IPerson) => {
		pers.age = 60;
	  }
	// CODE HERE
	const person: IPerson = {
		name: 'Hans Hammerschmidt',
		age: 30,
		displayText: function() {
		  console.log('This is a person object.');
		  
		  return `${this.name} is ${this.age} years old.`;
		}
	  };
	  changeAge(person);

	  return /*html*/`
		<div class="solution">
		  ${person.displayText()}
		</div>
	  `;
}
export default IbrahimPb2Exam002CreateObjectLiteralWithMethod001;