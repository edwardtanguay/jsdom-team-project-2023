const ElviraJsDomChangeStylesOfMultipleElements001 = () => {
	// CODE HERE
	setTimeout(() => {
		const solutionElem = document.querySelector<HTMLDivElement>("div.solution");

		if (solutionElem) {
			console.log(solutionElem);
			//erstellen 2 elemente und Klassen
			const leftUl = document.createElement("ul");
			leftUl.className = "left";

			const rightUl = document.createElement("ul");
			rightUl.className = "right";

			//elemente zum div solution hinzufügen
			solutionElem.appendChild(leftUl);
			solutionElem.appendChild(rightUl);

			// neue elemente <li> erstellen
			for (let i = 1; i <= 5; i++) {
				const leftLi = document.createElement("li");
				leftLi.textContent = "Left List Item " + i;
				leftUl.appendChild(leftLi);

				const rightLi = document.createElement("li");
				rightLi.textContent = "Right List Item " + i;
				rightUl.appendChild(rightLi);
			}

			// Получаем коллекции элементов <li> для обоих списков
			const leftListItems =
				document.querySelectorAll<HTMLDivElement>(".left li");
			const rightListItems =
				document.querySelectorAll<HTMLDivElement>(".right li");

			// Итерируемся через коллекцию элементов и изменяем цвет текста
			leftListItems.forEach((li) => {
				li.style.color = "blue";
			});

			rightListItems.forEach((li) => {
				li.style.color = "yellow";
			});
		}
	});
	return /*html*/ `
	<div class="solution">
		
	</div>
`;
};
export default ElviraJsDomChangeStylesOfMultipleElements001;
