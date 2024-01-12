const LukasJsDomChangeStylesOfMultipleElements001 = () => {
	// CODE HERE
	setTimeout(() => {
		const leftList = document.querySelectorAll<HTMLLIElement>(".left");
		if (leftList) {
			leftList.forEach((item) => {
				item.style.color = "red";
			});
		}
		const rightList = document.querySelectorAll<HTMLLIElement>(".right");
		if (rightList) {
			rightList.forEach((item) => {
				item.style.color = "blue";
				item.style.marginLeft = "100px";
			});
		}
	});

	return /*html*/ `
	<div class="solution flex flex-row">
		<ul class="left">
			<li>Voltaire (1694-1778)</li>
			<li>Jane Austen (1775-1817)</li>
			<li>Jonathan Swift (1667-1745)</li>
			<li>Emily Dickinson (1830-1886)</li>
			<li>Denis Diderot (1713-1784)</li>
			<li>Samuel Johnson (1709-1784)</li>
			<li>Mary Wollstonecraft (1759-1797)</li>
		</ul>	
		<ul class="right">
			<li>Mary Wollstonecraft (1759-1797)</li>
			<li>Jean-Jacques Rousseau (1712-1778)</li>
			<li>Daniel Defoe (1660-1731)</li>
			<li>Henry Fielding (1707-1754)</li>
			<li>Edgar Allan Poe (1809-1849)</li>
			<li>Honore de Balzac (1799-1850)</li>
			<li>Mark Twain (1835-1910)</li>
		</ul>
	</div>
`;
};
export default LukasJsDomChangeStylesOfMultipleElements001;
