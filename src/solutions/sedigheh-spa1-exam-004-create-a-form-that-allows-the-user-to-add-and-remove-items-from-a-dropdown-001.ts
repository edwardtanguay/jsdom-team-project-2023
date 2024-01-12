const SedighehSpa1Exam004CreateAFormThatAllowsTheUserToAddAndRemoveItemsFromADropdown001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const selectedCityElem =
				document.querySelector<HTMLSelectElement>("#selected_city");
			const deleteCityElem =
				document.querySelector<HTMLButtonElement>(".delete_city");
			const addCityElem =
				document.querySelector<HTMLButtonElement>(".add_city");
			const cityInputElem =
				document.querySelector<HTMLInputElement>(".city_input");

			if (
				selectedCityElem &&
				deleteCityElem &&
				addCityElem &&
				cityInputElem
			) {
				deleteCityElem.addEventListener("click", () => {
					selectedCityElem.remove(selectedCityElem.selectedIndex);
				});
				addCityElem.addEventListener("click", () => {
					const optionText = cityInputElem.value.trim();
				
					
					if (optionText !== "") {
						const optionElem = document.createElement("option");
						optionElem.value = optionText;
						optionElem.innerText = optionText;
						selectedCityElem.appendChild(optionElem);
						
				
					}
				});
			}
		});

		// OTHER CODE HERE:

		return /*html*/ `
<div class="container">
	<form action="">
		<select name="selected_city" id="selected_city" class="text-black">
			<option value="Berlin">Berlin</option>
			<option value="Rome">Rome</option>
			<option value="London">London</option>
			<option value="Paris">Paris</option>
			<option value="Melbourne">Melbourne</option>
		</select>
	</form>
	<div class="controls">
		<button class="delete_city">Delete Selected City</button>
		<div class="add-city-container">
			<input type="text" class="city_input text-black" placeholder="Enter a city">
			<button class="add_city">Add City</button>
		</div>
	</div>
</div>

`;
	};
export default SedighehSpa1Exam004CreateAFormThatAllowsTheUserToAddAndRemoveItemsFromADropdown001;
