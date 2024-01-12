const SelmanPb2Exam004CalculateTotalWithReduce001 = () => {
	// CODE HERE
	const weightTracking = [
		{ person: "Elisa", start: 85, end: 80 },
		{ person: "Robert", start: 79, end: 72 },
		{ person: "Andy", start: 69, end: 66 },
		{ person: "Roxanne", start: 82, end: 75 },
		{ person: "Andrew", start: 78, end: 74 },
	];
	const weightLoss: number = weightTracking.reduce(
		(totalWeight, weightValue) =>
			totalWeight + weightValue.start - weightValue.end,
		0
	);
	return /*html*/ `
	<div class="solution">
		${weightTracking
			.map(({ person }) => {
				return /*html*/ ` <div> <span class="text-red-500"> ${person} </span> has lost <span class="text-red-500"> ${weightLoss} </span>  kilos.</div>
		
	   `;
			})
			.join("")}
	</div>
`;
};
export default SelmanPb2Exam004CalculateTotalWithReduce001;
