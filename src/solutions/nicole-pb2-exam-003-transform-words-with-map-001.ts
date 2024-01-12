const NicolePb2Exam003TransformWordsWithMap001 = () => {

	// CODE HERE
	const products = [
		{ id: 100001, title: 'Samsung Galaxy S23', price: 599.99 },
		{ id: 100002, title: 'ThinkPad P1 Gen 6', price: 999.99 },
		{ id: 100003, title: 'Noise cancelling headphones', price: 149.99 }
	];
	
	const productCodes = products.map(m => `${m.id}-${m.title.toLowerCase().split(' ').join('-')}`);
		
	return /*html*/`
	<div class="solution">
	${productCodes.map(productCode => {
		return `<div>${productCode}</div>`
	}).join('')}
	</div>
`;
}
export default NicolePb2Exam003TransformWordsWithMap001;