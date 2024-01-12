const SelmanJsDomShowInfoTipsWhenFieldsAreFocused001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const zipCodeField =
			document.querySelector<HTMLInputElement>("#zipCode");
		const stateField = document.querySelector<HTMLInputElement>("#State");
		// functions
		function setPlaceholder(message: string, field: HTMLInputElement) {
			field.placeholder = message;
		}

		function removePlaceholder(field: HTMLInputElement) {
			field.placeholder = "";
		}
		function handleFocus(event: FocusEvent, message: string) {
			setPlaceholder(message, event.currentTarget as HTMLInputElement);
		}

		function handleBlur(field: HTMLInputElement) {
			removePlaceholder(field);
		}
		// focus
		zipCodeField?.addEventListener("focus", (event) => {
			handleFocus(event, "Please enter a 5-digit number");
		});

		stateField?.addEventListener("focus", (event) => {
			handleFocus(event, "Please enter only two letters, e.g. AZ");
		});
		// blur
		zipCodeField?.addEventListener("blur", () => {
			handleBlur(zipCodeField);
		});
		stateField?.addEventListener("blur", () => {
			handleBlur(stateField);
		});
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution flex gap-4">
	<label for="ZipCode" class="max-w-fit">Zip Code</label>
	<input type="text" name="ZipCode" id="zipCode" class="p-1" >
	<label for="State">State</label>
	<input type="text" name="State" id="State">
	</div>
`;
};
export default SelmanJsDomShowInfoTipsWhenFieldsAreFocused001;
