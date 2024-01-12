const LukasPb2Exam004CalculateTotalWithReduce001 = () => {
	// CODE HERE
	const weightTracking = [
		{ person: "Elisa", start: 85, end: 80 },
		{ person: "Robert", start: 79, end: 72 },
		{ person: "Andy", start: 69, end: 66 },
		{ person: "Roxanne", start: 82, end: 75 },
		{ person: "Andrew", start: 78, end: 74 },
	];

	const totalWeightLoss = weightTracking.reduce(
		(totalWeight, weightTrackingItem) => {
			return (
				totalWeight + weightTrackingItem.start - weightTrackingItem.end
			);
		},
		0
	);

	return /*html*/ `
	<div class="solution">
		The Total weight loss was <span class="font-extrabold text-cyan-400">${totalWeightLoss}</span> kilos.
	</div>
`;
};
export default LukasPb2Exam004CalculateTotalWithReduce001;
