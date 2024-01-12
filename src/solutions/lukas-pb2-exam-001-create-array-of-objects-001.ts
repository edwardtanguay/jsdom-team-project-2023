const LukasPb2Exam001CreateArrayOfObjects001 = () => {
	// CODE HERE
	const nametags = [
		{
			name: "Jazmin",
			position: "Creative Team",
			backgroundColour: "gold",
			imageFile: "wing.png",
		},
		{
			name: "Melissa",
			position: "Account Manager",
			backgroundColour: "white",
			imageFile: "swirls.jpg",
		},
		{
			name: "Patricia",
			position: "Customer Service",
			backgroundColour: "silver",
			imageFile: "flowery.png",
		},
	];

	return /*html*/ `
	<div class="solution">
		<ul>
			${nametags
				.map(
					(m) => /*html*/ `
				<li>
				<strong class="text-green-900">${m.name}:</strong> ${m.position}, ${m.backgroundColour}, ${m.imageFile}
				</li>`
				)
				.join("")}
		</ul>
	</div>
`;
};
export default LukasPb2Exam001CreateArrayOfObjects001;
