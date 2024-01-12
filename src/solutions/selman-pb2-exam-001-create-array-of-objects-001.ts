const SelmanPb2Exam001CreateArrayOfObjects001 = () => {
	// CODE HERE
	const namesArray = [
		{
			name: "Jazmin",
			position: "Creative Team",
			backgroundColor: "gold",
			imageFile: "rainbowwing.png",
		},
		{
			name: "Melissa",
			position: "Account Manager",
			backgroundColor: "white",
			imageFile: "swirl.png",
		},
		{
			name: "Patricia",
			position: "Customer Service",
			backgroundColor: "silver",
			imageFile: "rainbowflower.png",
		},
	];

	return /*html*/ `
	<div class="solution">
		${namesArray
			.map((arrayItem) => {
				return /*html*/ `
		<div>${arrayItem.name}, ${arrayItem.position}, ${arrayItem.backgroundColor}, ${arrayItem.imageFile}</div>`;
			})
			.join("")}
	</div>
`;
};
export default SelmanPb2Exam001CreateArrayOfObjects001;
