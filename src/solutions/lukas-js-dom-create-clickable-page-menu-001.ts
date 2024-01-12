const LukasJsDomCreateClickablePageMenu001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const pages = [
			{ title: "Home", html: "#home" },
			{ title: "Info", url: "#info" },
			{ title: "Events", url: "#events" },
		];

		const listDiv = document.querySelector("div.solution");
		const list = document.createElement("ul");
		list.classList.add("flex", "flex-row", "justify-center", "gap-4");
		if (listDiv) {
			listDiv.appendChild(list);
		}

		const displayElement = document.createElement("p");
		displayElement.textContent = "Click a link to display its title.";
		if (listDiv) {
			displayElement.classList.add("text-2xl", "pt-4", "text-center");
			listDiv.appendChild(displayElement);
		}

		const listItems = pages.map((page) => {
			const listItem = document.createElement("li");
			listItem.classList.add("text-2xl", "pr-4");
			const link = document.createElement("a");
			link.innerText = page.title;

			link.addEventListener("click", () => {
				const linkText = link.innerText;
				displayElement.textContent = `Clicked: ${linkText}`;
			});

			listItem.appendChild(link);
			return listItem;
		});
		listItems.forEach((listItem) => {
			list.appendChild(listItem);
		});
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution flex flex-col"></div>
`;
};
export default LukasJsDomCreateClickablePageMenu001;
