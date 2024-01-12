const EdwardJsDomChangeStyleOfElements001 = () => {

	// code here
	setTimeout(() => {
		const infoElem = document.querySelector<HTMLDivElement>('.info');
		if (infoElem) {
			infoElem.style.color = 'yellow';
			infoElem.style.backgroundColor = 'brown';
			infoElem.style.width = '200px';
			infoElem.style.height = '100px';
			infoElem.style.display = 'flex';
			infoElem.style.justifyContent = 'center'
			infoElem.style.alignItems = 'center';
			infoElem.style.fontSize = '2rem';
		}

		const eventElem = document.querySelector<HTMLDivElement>('.events');
		if (eventElem) {
			eventElem.style.color = 'lightblue';
			eventElem.style.backgroundColor = 'green';
			eventElem.style.width = '100px';
			eventElem.style.height = '50px';
			eventElem.style.display = 'flex';
			eventElem.style.justifyContent = 'center'
			eventElem.style.alignItems = 'center';
			eventElem.style.fontSize = '1rem';
		}
	}, 0);

	return /*html*/`
	<div class="solution flex gap-4">
		<div class="info">Info</div>
		<div class="events">Events</div>
	</div>
`;
}

export default EdwardJsDomChangeStyleOfElements001;