const ElviraPb2Exam003TransformWordsWithMap001 = () => {

	// CODE HERE
const products = [
	{
		id: 10001,
		title: "Samsung Galaxy",
		price: 599.99
	},
	{
		id: 10002,
		title: "Thinkpad",
		price: 999.99	
	},
	{
		id: 10003,
		title: "Noise cancelling headphones",
		price: 149.99
	},
]
const string = products.map(function(product) {
		return `${product.id} - ${product.title} - ${product.price} <br>`
	});


	return /*html*/`
	<div class="solution">
		${string}
	</div>
`;
}
export default ElviraPb2Exam003TransformWordsWithMap001;