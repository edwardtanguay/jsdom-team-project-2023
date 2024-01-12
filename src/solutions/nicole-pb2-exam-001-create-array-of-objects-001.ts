const NicolePb2Exam001CreateArrayOfObjects001 = () => {

	// CODE HERE
	
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
			return `<div>
               
			${nametag.name}, ${nametag.position}, ${nametag.backgroundColor},${nametag.imageFile}
			</div>`
		}).join("")}
	</div>
`;
}
export default NicolePb2Exam001CreateArrayOfObjects001;