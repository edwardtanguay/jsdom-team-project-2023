const ElviraPb2Exam004CalculateTotalWithReduce001 = () => {

	// CODE HERE
const weightTracking = [
	{person: "Elisa", start: 85, end: 80},
	{person: "Robert", start: 79, end: 79}, 
	{person: "Anfy", start: 96, end: 90},
	{person: "Roxanne", start: 82, end: 80},
	{person: "Andrew", start: 80, end: 79}
]
const totalReduceWeight = weightTracking.reduce(
	(total, personData) => {
	return total + personData.start - personData.end 
	}, 0 // 0- ist Anfang
)

/* ohne html wäre :console.log(`The total weight loss was ${totalReduceWeight} kilos.`); */

return /*html*/`
	<div class="solution">
		The total weight loss was ${totalReduceWeight} kilos.
	</div>
`;
}
export default ElviraPb2Exam004CalculateTotalWithReduce001;