const LukasPb2Exam003TransformWordsWithMap001 = () => {
	// CODE HERE
	const products = [
		{ id: 100001, title: "Samsung Galaxy S23", price: 599.99 },
		{ id: 100002, title: "ThinkPad P1 Gen 6", price: 999.99 },
		{ id: 100003, title: "Noise cancelling headphones", price: 149.99 },
	];

	return /*html*/ `
	<div class="solution">
		<ul class="bg-orange-200">
			${products
				.map(
					(p) => /*html*/ `
					<li>
					${p.id}-${p.title.toLowerCase().split(" ").join("-")}				
					</li>`
				)
				.join("")}
		</ul>
	</div>
`;
};
export default LukasPb2Exam003TransformWordsWithMap001;
