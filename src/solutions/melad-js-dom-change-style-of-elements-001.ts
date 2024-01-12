const MeladJsDomChangeStyleOfElements001 = () => {

	// CODE HERE


	setTimeout(() => {
		const infoElem = document.querySelector<HTMLDivElement>('.info');
		if (infoElem) {
			infoElem.style.color = 'white';
			infoElem.style.backgroundColor = 'green';
			infoElem.style.width = '400px';
			infoElem.style.height = '200px';
			infoElem.style.display = 'flex';
			infoElem.style.justifyContent = 'center'
			infoElem.style.alignItems = 'center';
			infoElem.style.fontSize = '5rem';
		}

		const eventElem = document.querySelector<HTMLDivElement>('.events');
		if (eventElem) {
			eventElem.style.color = 'white';
			eventElem.style.backgroundColor = 'blue';
			eventElem.style.width = '280px';
			eventElem.style.height = '90px';
			eventElem.style.display = 'flex';
			eventElem.style.justifyContent = 'center'
			eventElem.style.alignItems = 'center';
			eventElem.style.fontSize = '3rem';
		}
	}, 0);

	return /*html*/`
	<div class="solution flex gap-4">
		<div class="info">Field</div>
		<div class="events">Project</div>
	</div>
`;
}

export default MeladJsDomChangeStyleOfElements001;