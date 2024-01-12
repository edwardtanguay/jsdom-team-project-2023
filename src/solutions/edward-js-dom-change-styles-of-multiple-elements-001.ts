const EdwardJsDomChangeStylesOfMultipleElements001 = () => {

	// CODE HERE
	setTimeout(() => {
		const authors18Elems = document.querySelectorAll('.authors18 li') as NodeListOf<HTMLLIElement>;
		const authors19Elems = document.querySelectorAll('.authors19 li') as NodeListOf<HTMLLIElement>;

		if (authors18Elems) {
			for (const authors18Elem of authors18Elems) {
				authors18Elem.style.color = 'red';
			}
		}

		if (authors19Elems) {
			for (const authors19Elem of authors19Elems) {
				authors19Elem.style.color = 'green';
			}
		}
	});

	return /*html*/`
	<style>
		.solution {
			gap: 3rem;
		}
	</style>
	<div class="solution flex">
		<ul class="authors18 ml-6">
			<li>Voltaire (1694-1778)</li>
			<li>Jane Austen (1775-1817)</li>
			<li>Jonathan Swift (1667-1745)</li>
			<li>Denis Diderot (1713-1784)</li>
			<li>Samuel Johnson (1709-1784)</li>
			<li>Mary Wollstonecraft (1759-1797)</li>
			<li>Jean-Jacques Rousseau (1712-1778)</li>
			<li>Daniel Defoe (1660-1731)</li>
			<li>Henry Fielding (1707-1754)</li>
			<li>Laurence Sterne (1713-1768)</li>
		</ul>
		<ul class="authors19">
			<li>Jane Austen (1775-1817)</li>
			<li>Charles Dickens (1812-1870)</li>
			<li>Leo Tolstoy (1828-1910)</li>
			<li>Emily Brontë (1818-1848)</li>
			<li>Charlotte Brontë (1816-1855)</li>
			<li>Fyodor Dostoevsky (1821-1881)</li>
			<li>Gustave Flaubert (1821-1880)</li>
			<li>Edgar Allan Poe (1809-1849)</li>
			<li>Honore de Balzac (1799-1850)</li>
			<li>Mark Twain (1835-1910)</li>
		</ul>
	</div>
`;
}
export default EdwardJsDomChangeStylesOfMultipleElements001;