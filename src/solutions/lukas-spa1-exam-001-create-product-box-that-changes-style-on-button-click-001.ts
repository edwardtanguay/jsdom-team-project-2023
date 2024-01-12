const LukasSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const img = document.querySelector<HTMLImageElement>("img");
		const button = document.querySelector<HTMLButtonElement>(".buy_button");
		const container =
			document.querySelector<HTMLDivElement>(".buy_container");

		if (img && button && container) {
			img.style.width = "200px";
			button.addEventListener("click", (e) => {
				e.preventDefault();
				container.classList.toggle("bg-white");
				container.classList.toggle("bg-orange-500");
				container.classList.toggle("text-black");
				container.classList.toggle("text-white");
				button.classList.toggle("bg-white");
				button.classList.toggle("bg-orange-500");
				button.classList.toggle("text-black");
				button.classList.toggle("text-white");
				if (button.textContent === "Buy?") {
					button.textContent = "Purchased!";
				} else {
					button.textContent = "Buy?";
				}
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
		<div class=" buy_container flex justify-center bg-white rounded-full">
			<img class="mb-6"  src="https://edwardtanguay.vercel.app/customImages/techBooks/practicalJamstack.jpg" alt="Title Picture of the Book Practial JAMstack">	</div>
			<button class="p-4 buy_button mt-6 bg-white text-black w-1/2 rounded-full">Buy?</button>
		</div>
`;
};
export default LukasSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001;
