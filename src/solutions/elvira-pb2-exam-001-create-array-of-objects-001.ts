const ElviraPb2Exam001CreateArrayOfObjects001 = () => {

	// CODE HERE
//Array of obejcts
const nameTags = [
{
	name: 'Mary',
	position: 'CEO',
	backgroundColor: 'white',
	imageFile: 'wing.png'
},
{
	name: 'Anna',
	position: 'Marketing manager',
	backgroundColor: 'black',
	imageFile: 'wing.png'
},
{
	name: 'Lisa',
	position: 'Salesmanager',
	backgroundColor: 'gold',
	imageFile: 'wing.png'
}
];



	return /*html*/`
	<div class="solution">
	${nameTags.map(nametag => {
			return `<div>${nametag.name}, ${nametag.position}, ${nametag.backgroundColor},${nametag.imageFile}</div>`
		}).join("")}
	</div>
`;
}
export default ElviraPb2Exam001CreateArrayOfObjects001;

