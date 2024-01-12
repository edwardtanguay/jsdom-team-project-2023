const LukasJsDomCreateLoginFormThatHighlightsFieldAndBackground001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const form = document.querySelector<HTMLFormElement>(".solution_form");
		const login = document.querySelector<HTMLInputElement>("#login");
		const password = document.querySelector<HTMLInputElement>("#password");
		const labels = document.querySelectorAll<HTMLLabelElement>("label");
		const inputs = document.querySelectorAll<HTMLInputElement>("input");
		if (form && login && password && labels && inputs) {
			form.addEventListener("click", () => {
				form.style.backgroundColor = "#FED8B1";
				labels.forEach((label) => {
					label.style.color = "black";
				});
			});
			form.addEventListener("focusout", () => {
				form.style.backgroundColor = "#262626";
				labels.forEach((label) => {
					label.style.color = "white";
				});
			});
			inputs.forEach((input) => {
				input.addEventListener("focusin", () => {
					input.style.backgroundColor = "#FFFF33";
				});
				input.addEventListener("focusout", () => {
					input.style.backgroundColor = "#FFFFFF";
				});
			});
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
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
		form{width:100%;
		padding: 3rem 1rem;}
	</style>
`;
};
export default LukasJsDomCreateLoginFormThatHighlightsFieldAndBackground001;
