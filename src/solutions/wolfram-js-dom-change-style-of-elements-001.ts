const WolframJsDomChangeStyleOfElements001 = () => {
	// CODE HERE


setTimeout(() => {
	const infoElement = document.querySelector<HTMLDivElement>(".info");
	if (infoElement){
		infoElement.innerHTML = "Information";
		infoElement.style.color = "red";
		infoElement.style.backgroundColor = "yellow";
		infoElement.style.width = "200px";
		infoElement.style.height = "100px";
		infoElement.style.display = "flex";
		infoElement.style.alignItems = "center";
		infoElement.style.justifyContent = "center";

	}
	const eventsElement = document.querySelector<HTMLDivElement>(".events");
	if (eventsElement){
		eventsElement.innerHTML = "Events";
		eventsElement.style.color = "green";
		eventsElement.style.backgroundColor = "blue";
		eventsElement.style.width = "300px";
		eventsElement.style.height = "150px";
		eventsElement.style.display = "flex";
		eventsElement.style.alignItems = "center";
		eventsElement.style.justifyContent = "center";
	}
	
},  0);

	

	return /*html*/ `
	<div class="solution">
		<div class="info"></div>
		<div class="events"></div>
	</div>
`;
};

export default WolframJsDomChangeStyleOfElements001;
