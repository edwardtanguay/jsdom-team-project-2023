const SelmanPb2Exam003TransformWordsWithMap001 = () => {
	// CODE HERE
	const products = [
		{ id: 100001, title: "Samsung Galaxy S23", price: 599.99 },
		{ id: 100002, title: "ThinkPad P1 Gen 6", price: 999.99 },
		{ id: 100003, title: "Noise cancelling headphones", price: 149.99 },
	];

	const productCodes = products.map(
		(product) =>
			`${product.id}-${product.title.toLowerCase().split(" ").join("-")}`
	);

	console.log(productCodes);

	return /*html*/ `
	<div class="solution text-blue-500">
		${productCodes
			.map((code) => {
				return /*html*/ `<div>${code}</div> `;
			})
			.join("")}
	</div>
`;
};
export default SelmanPb2Exam003TransformWordsWithMap001;
