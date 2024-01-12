const EdwardJsDomCreateLoginFormThatHighlightsFieldAndBackground001 = () => {

	setTimeout(() => {
		const formElem = document.querySelector<HTMLFormElement>(".solution_form");
		const inputs = document.querySelectorAll<HTMLInputElement>("input");

		if (formElem) {
			formElem.addEventListener("click", (e) => {
				const clickedElem = e.target as HTMLFormElement | HTMLInputElement;
				const attachedEventElem = e.currentTarget as HTMLFormElement;
				if (clickedElem && attachedEventElem) {
					attachedEventElem.style.backgroundColor = "navy";

					if (clickedElem.nodeName === 'FORM') {
						clickedElem.style.backgroundColor = "navy";
					} else {
						clickedElem.style.backgroundColor = "yellow";
					}
				}
			});
			inputs.forEach(input => {
				input.addEventListener('focusout', (e) => {
					const elem = e.target as HTMLInputElement;
					if (elem) {
						elem.style.backgroundColor = "white";
					}
				})
			})
			// formElem.addEventListener("focusout", (e) => {
			// 	const elem = e.currentTarget as HTMLFormElement;
			// 	elem.style.backgroundColor = "#555";
			// 	console.log(elem);
			// });
		}

	});

	return /*html*/`
	<div class="solution">
		<form action="" class="flex flex-col solution_form gap-4">
			<label for="login" class="label">Login name:</label>
			<input type="text" name="login" id="login">
			<label for="password" class="label">Password:</label>
			<input type="password" name="password" id="password">
		</form>
	</div>
	<style>
		#login, #password, label {
			width:50%
		}
		form{
			width:100%;
			padding: 3rem 1rem;
			background-color: #555;
		}
	</style>
`;
}
export default EdwardJsDomCreateLoginFormThatHighlightsFieldAndBackground001;