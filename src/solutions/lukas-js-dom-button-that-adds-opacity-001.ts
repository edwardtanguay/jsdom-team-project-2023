const LukasJsDomButtonThatAddsOpacity001 = () => {
	// CODE HERE

	setTimeout(() => {
		const paragraph =
			document.querySelector<HTMLParagraphElement>(".opacity_p");
		const buttonOpacity =
			document.querySelector<HTMLButtonElement>(".opacity_button");
		console.log(document.readyState);
		buttonOpacity?.addEventListener("click", (e) => {
			e.preventDefault();
			if (paragraph) {
				paragraph.style.opacity = "0.5";
			}
		});
	});

	return /*html*/ `
	<div class="solution flex flex-col gap-4">
		<p class="opacity_p">online</p>
		<button class="opacity_button bg-white rounded-full p-2 w-2/5 text-black">Add opacity</button>
	</div>
	`;
};

export default LukasJsDomButtonThatAddsOpacity001;
