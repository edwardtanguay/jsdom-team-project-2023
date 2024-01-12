const LukasSpa1Exam002DisplayAllAttributesOfAnElement001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const img = document.querySelector<HTMLImageElement>("img");
		const button =
			document.querySelector<HTMLButtonElement>(".details_button");
		if (img && button) {
			button.addEventListener("click", (e) => {
				e.preventDefault();
				const attributes = img.attributes;
				const pre = document.querySelector<HTMLPreElement>("pre");
				if (pre && attributes) {
					if (pre.innerText === "") {
						for (let i = 0; i < attributes.length; i++) {
							pre.innerText += `${attributes[i].name}: ${attributes[i].value}\n`;
						}
					} else {
						pre.innerText = "";
					}
				}
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution flex gap-4 h-1/2">
		<img src="images/general/book77827.jpg"
    	id="book77827"
    	alt="Book: Node.js Rezepte und Lösungen"
    	title="Node.js Rezepte und Lösungen"
    	class="img-responsive"
    	aria-label="Book: Node.js Rezepte und Lösungen"
    />
	<div>
		<button class="details_button">Show Element Details</button>
		<pre></pre>
	</div>	
	</div>
`;
};
export default LukasSpa1Exam002DisplayAllAttributesOfAnElement001;
