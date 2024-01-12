const LukasSpa1Exam004CreateAFormThatAllowsTheUserToAddAndRemoveItemsFromADropdown001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const citySelection =
				document.querySelector<HTMLSelectElement>("#city_selection");
			const cityInput =
				document.querySelector<HTMLInputElement>(".city_input");
			const addCity =
				document.querySelector<HTMLButtonElement>(".add_city");
			const deleteCity =
				document.querySelector<HTMLButtonElement>(".delete_city");
			const cities = document.querySelectorAll<HTMLOptionElement>(
				"#city_selection option"
			);
			if (citySelection && cityInput && addCity && deleteCity && cities) {
				cityInput.style.color = "black";
				deleteCity.addEventListener("click", () => {
					citySelection.removeChild(citySelection.selectedOptions[0]);
				});
				addCity.addEventListener("click", () => {
					cityInput.value = cityInput.value.trim();
					if (cityInput.value) {
						const option = document.createElement("option");
						option.value = cityInput.value;
						option.innerText = cityInput.value;
						citySelection.appendChild(option);
						cityInput.value = "";
					}
				});
			}
		});

		// OTHER CODE HERE:

		return /*html*/ `
	<div class="solution flex gap-4">
		<form action="">
			<select name="" id="city_selection" class="text-black">
				<option value="Berlin">Berlin</option>
				<option value="Rome">Rome</option>
				<option value="London">London</option>
				<option value="Paris">Paris</option>
				<option value="Melbourne">Melbourne</option>
			</select>
		</form>
		<div class="flex flex-col gap-4">
			<button class="delete_city">delete Selected City</button>
			<div class="flex gap-4">
				<input type="text" class="city_input" class="text-black">
				<button class="add_city">add City</button>
			</div>
		</div>
	</div>
`;
	};
export default LukasSpa1Exam004CreateAFormThatAllowsTheUserToAddAndRemoveItemsFromADropdown001;
