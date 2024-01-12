const SalarSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001 = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const product = document.querySelector('.product') as HTMLElement;
		const buyButton = document.querySelector('#buy-button') as HTMLElement;
		buyButton.addEventListener('click', () => {
			product.classList.toggle('active');
			buyButton.classList.toggle('active');
			if (buyButton.classList.contains('active')) {
				buyButton.textContent = 'Remove';
			} else {
				buyButton.textContent = 'Buy';
			}


		});


	});

	// OTHER CODE HERE:


	return /*html*/`
	<style>
	.product {
	border: 2px solid #ccc;
	padding: 20px;
	text-align: center;}

	.product-box {
    border: 2px solid #ccc;
    padding: 20px;
    text-align: center;
}
	.product.active {
	border: 2px solid #3498db;
	background-color:silver;

}

	.buy-button {
    background-color: #3498db;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
	</style>
	<div class="solution">
	<div class="product">
		<img class= "product-img" src="https://edwardtanguay.vercel.app/customImages/techBooks/practicalJamstack.jpg" alt="Product Img">
		<p>product Title</p>
		<p>Price : $19.99</p>
		<button class="buy-button" id="buy-button">Buy</button>
	</div>
`;
}
export default SalarSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001;