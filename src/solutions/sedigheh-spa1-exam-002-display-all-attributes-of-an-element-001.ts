const SedighehSpa1Exam002DisplayAllAttributesOfAnElement001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:

	setTimeout(() => {
		const btnElem = document.querySelector(
			"#displayAttributes"
		) as HTMLButtonElement;
		const preElem = document.querySelector(
			"#attributeOutput"
		) as HTMLPreElement;
		const imgElem = document.querySelector('#book77827') as HTMLImageElement;
		console.log(imgElem.attributes);

		const imageAttributes: {
			[key: string]: string;
		} = {};
		
		imageAttributes["src"] = "images/general/book77827.jpg";
		imageAttributes["id"] = "Book: Node.js Rezepte und Lösungen";
		imageAttributes["alt"] = "Node.js Rezepte und Lösungen"
		imageAttributes["title"] = "Node.js Rezepte und Lösungen"
		imageAttributes["class"] = "img-responsive"
		imageAttributes[" aria-label"] = "Node.js Rezepte und Lösungen"
	
		console.log(imageAttributes["src"]);
		console.log(imageAttributes["id"]);
		console.log(imageAttributes["alt"]);
		console.log(imageAttributes["title"]);
		console.log(imageAttributes["class"]);
		console.log(imageAttributes["aria-lable"]);

		preElem.innerHTML = JSON.stringify(
			imageAttributes,
			null,
			2
		);
		
		btnElem.addEventListener("click", () => {
			const isHidden = preElem.classList.toggle("hidden");
			
			if (isHidden) {
			  btnElem.textContent = "Display attributes";
			} else {
			  btnElem.textContent = "Hide attributes";
			}
		  });
		
	});

	// OTHER CODE HERE:

	return /*html*/ `
<div class="solution flex gap-6">
	<div class="hCard flex gap-10 items-center h-screen justify-between">
		<div class = "hCard-left">
    <img src="images/general/book77827.jpg" id="book77827" alt="Book: Node.js Rezepte und Lösungen" title="Node.js Rezepte und Lösungen" class="img-responsive" aria-label="Book: Node.js Rezepte und Lösungen"/>
</div>
    <div class=" hCard-right flex items-center space-x-4 mt-4">
	<button id="displayAttributes" class="px-4 py-2 border border-red-300 rounded hover:bg-red-500 text-black">Display Attributes</button>
        <pre id="attributeOutput" class= "hidden"></pre>
    </div>
</div>
</div>
`;
};
export default SedighehSpa1Exam002DisplayAllAttributesOfAnElement001;
