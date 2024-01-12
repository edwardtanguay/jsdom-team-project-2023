interface FormData {
	firstName: string;
	lastName: string;
	form_select: string;
	skills_html?: string;
	skills_css?: string;
	skills_js?: string;
	motto_text: string;
}

const LukasJsDomCreateAUserProfileFormThatDisplaysTheProfileWhenButtonIsClicked001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const form = document.querySelector<HTMLFormElement>(".data_form");
			const outputElem =
				document.querySelector<HTMLPreElement>(".form_output");
			if (form && outputElem) {
				form.addEventListener("submit", (e) => {
					e.preventDefault();
					const formData = new FormData(e.target as HTMLFormElement);
					console.log(formData);
					const data: FormData = {
						firstName: formData.get("firstName") as string,
						lastName: formData.get("lastName") as string,
						form_select: formData.get("form_select") as string,
						skills_html: formData.get("skills_html") as string,
						skills_css: formData.get("skills_css") as string,
						skills_js: formData.get("skills_js") as string,
						motto_text: formData.get("motto_text") as string,
					};
					console.log(data);
					const output =
						document.querySelector<HTMLPreElement>(".form_output");
					if (output) {
						if (
							data.skills_html === null &&
							data.skills_css === null &&
							data.skills_js === null
						) {
							output.innerText = `${data.firstName} ${
								data.lastName
							} is a ${
								data.form_select
									? data.form_select
									: `Web Developer`
							} developer. His motto is: "${data.motto_text}"`;
						} else if (true) {
						}
					}
				});
			}
		});

		// OTHER CODE HERE:

		return /*html*/ `
		<div class="solution flex flex-row ">
		<form action="" class="flex-col flex w-1/2 gap-4 p-4 data_form">
		<label for="firstName">First Name</label>
		<input type="text" for="firstName" name="firstName" class="text-black">
		<label for="lastName">Last Name</label>
		<input type="text" for="lastName" name="lastName" class="text-black">
		<label for="field_of_operation" class="mt-1">Field of Operation</label>
		<select name="form_select" id="form_select" class ="pl-1 text-black  mb-1">
			<option  value="" disabled selected>Select your option</option>
			<option value="Front-End">Front-End</option>
			<option value="Back-End">Back-End</option>
			<option value="Fullstack">Fullstack</option>
		</select>
		<label for="skills">Skills</label>
		<div class="justify-between flex pl-4 w-1/2">
			<label for="skills_html">HTML</label>
			<input type="checkbox" name="skills_html" id="skills_html" >
		</div>
		<div class="justify-between flex pl-4 w-1/2">
			<label for="skills_css">CSS</label>
			<input type="checkbox" name="skills_css" id="skills_css" >
		</div>
		<div class="justify-between flex pl-4 w-1/2">
			<label for="skills_js">JavaScript</label>
			<input type="checkbox" name="skills_js" id="skills_js" >
		</div>
		<label for="motto_text">Your Motto is..</label>
		<textarea class="text-black" name="motto_text" id="motto_text" cols="25" rows="3"></textarea>
		<button id="submit_button">Submit Data</button>
		</form>
	<div class="w-1/2 p-4">
	<h3>Form Data:</h3>
	<pre class="form_output"></pre>
	</div>
	</div>
	`;
	};
export default LukasJsDomCreateAUserProfileFormThatDisplaysTheProfileWhenButtonIsClicked001;
