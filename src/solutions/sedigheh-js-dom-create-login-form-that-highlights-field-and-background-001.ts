import { findClosingBracket } from "helpers";

const SedighehJsDomCreateLoginFormThatHighlightsFieldAndBackground001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const firstInputElem: HTMLElement | null =
			document.getElementById("loginName");
		const passwordElem: HTMLElement | null =
			document.getElementById("password");
		const solutionElem: HTMLElement | null =
			document.querySelector(".solution");

		const heightLightsField = (element: HTMLElement | null) => {
			if (element && solutionElem) {
				element.style.outline = "none";

				element.addEventListener("focus", (e) => {
					const elem = e.target as HTMLInputElement;
					console.log(elem);
					
					elem.style.backgroundColor = "pink";
					elem.style.color = "black";
					solutionElem.style.backgroundColor = "purple";
				});

				element.addEventListener("blur", (e) => {
					const elem = e.currentTarget as HTMLInputElement;
					console.log(elem);
					
					elem.style.backgroundColor = "white";
					elem.style.color = "black";
				});
			}
		};

		heightLightsField(firstInputElem);
		heightLightsField(passwordElem);
	});
	return /*html*/ `
	<div class="solution">
	<form id="loginForm" class= "flex flex-col gap-4 items-center">
        <label for="loginName">Login name:</label>
        <input type="text" id="loginName" name="loginName">

        <label for="password">Password:</label>
        <input type="password" id="password" name="password">

        <button type="button" class= " bg-red-500 px-4 py-2 rounded ">Submit</button>
    </form>
	</div>
`;
};
export default SedighehJsDomCreateLoginFormThatHighlightsFieldAndBackground001;
