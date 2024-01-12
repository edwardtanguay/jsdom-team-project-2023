const MeladPb2Exam001CreateArrayOfObjects001 = () => {

	// CODE HERE
     const nametags = [
		{
			name: 'John',
			position: 'Creative Team',
			backgroundColor: 'gold',
			imageFile: 'wing.png'
		},
		{
			name: 'Hamed',
			position: 'Account Manager',
			backgroundColor: 'white',
			imageFile: 'swirls.png'
		},
		{
			name: 'Paul',
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
export default MeladPb2Exam001CreateArrayOfObjects001;