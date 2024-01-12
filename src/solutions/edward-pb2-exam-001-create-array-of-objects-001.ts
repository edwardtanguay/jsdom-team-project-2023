const EdwardPb2ExamCreateArrayOfObjects = () => {

	const nametags = [
		{
			name: 'Jazmin',
			position: 'Creative Team',
			backgroundColor: 'gold',
			imageFile: 'wing.png'
		},
		{
			name: 'Melissa',
			position: 'Account Manager',
			backgroundColor: 'white',
			imageFile: 'swirls.png'
		},
		{
			name: 'Patricia',
			position: 'Customer Service',
			backgroundColor: 'gray',
			imageFile: 'flutter.png'
		}
	];

	return /*html*/`
	<div class="solution">
		${nametags.map(nametag => {
		return `
			<div>
				<span class="font-bold">${nametag.name}:</span>
				<span>${nametag.position}</span>,
				<span>${nametag.backgroundColor}</span>,
				<span>${nametag.imageFile}</span>
			</div>
		`;
		}).join('')}
	</div>
`;
}
export default EdwardPb2ExamCreateArrayOfObjects;
