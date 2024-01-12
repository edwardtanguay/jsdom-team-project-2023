const ElviraJsDomChangeStyleOfElements001 = () => {

	// CODE HERE
	setTimeout(() => {

	const infoElement = document.querySelector<HTMLDivElement>(".info");
	if (infoElement) {
		infoElement.style.color = "red";
		infoElement.innerText = "Der Text";
		infoElement.style.backgroundColor = "orange";
		infoElement.style.width = '200px';
		infoElement.style.height = '100px';
		infoElement.style.fontSize = '2rem';
		
	}
	const eventsElement = document.querySelector<HTMLDivElement>(".events");
	if (eventsElement) {
		eventsElement.style.color = "blue";
		eventsElement.style.backgroundColor = "white"
	}

	}, 0)


	return /*html*/`
	<div class="solution flex gap-4">
		<div class="info">Info</div>
		<div class="events">Events</div>
	</div>
`;
}
export default ElviraJsDomChangeStyleOfElements001;