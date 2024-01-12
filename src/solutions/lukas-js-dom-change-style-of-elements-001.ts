const LukasJsDomChangeStyleOfElements001 = () => {
	// CODE HERE
	setTimeout(() => {
		const infoDiv = document.querySelector<HTMLDivElement>(".info_div");
		const eventsDiv = document.querySelector<HTMLDivElement>(".events_div");

		if (infoDiv) {
			infoDiv.style.backgroundColor = "red";
			infoDiv.style.width = "30%";
			infoDiv.style.height = "60px";
			infoDiv.style.fontWeight = "bold";
			infoDiv.style.color = "blue";
			infoDiv.style.display = "flex";
			infoDiv.style.justifyContent = "center";
			infoDiv.style.alignItems = "center";
		}
		if (eventsDiv) {
			eventsDiv.style.backgroundColor = "blue";
			eventsDiv.style.width = "40%";
			eventsDiv.style.height = "80px";
			eventsDiv.style.fontWeight = "bold";
			eventsDiv.style.color = "red";
			eventsDiv.style.display = "flex";
			eventsDiv.style.justifyContent = "center";
			eventsDiv.style.alignItems = "center";
		}
	});
	return /*html*/ `
	<div class="solution flex flex-row gap-4">
	<div class="info_div ">Info</div>
	<div class="events_div">Events</div>
	</div>
`;
};
export default LukasJsDomChangeStyleOfElements001;
