const PatriciaSpa1Exam004CreateAFormThatAllowsTheUserToAddAndRemoveItemsFromADropdown001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const selectElem = document.getElementById<HTMLSelectElement>("#city_selection");
			const inputElem = document.querySelector<HTMLInputElement>(".city_input");
			const addButtonElem = document.querySelector<HTMLButtonElement>(".add_city");
			const delButtonElem = document.querySelector<HTMLButtonElement>(".delete_city");
			const cities = document.querySelectorAll<HTMLOptionElement>("#city_selection option");

			if (selectElem && inputElem && addButtonElem && delButtonElem && cities) {
				inputElem.style.color = "black"
				delButtonElem.addEventListener("click", () => {
					selectElem.removeChild(selectElem.selectedOptions[0])
				});
				addButtonElem.addEventListener("click", () => {
					inputElem.value = inputElem.value.trim();
					if (inputElem.value.length > 0) {
						const newOption = document.createElement("option")
						newOption.value = inputElem.value;
						newOption.textContent = inputElem.value;
						selectElem.appendChild(newOption);
						inputElem.value = ""
					}
				})
			}

		});

		// OTHER CODE HERE:

		return /*html*/ `
	<div class="solution flex gap-4 bg-slate-400">
		<form class="" action="">
			<select name="" id="city_selection" class="text-black">
				<option value="Berlin">Berlin</option>
				<option value="Rome">Rome</option>
				<option value="London">London</option>
				<option value="Paris">Paris</option>
				<option value="Melbourne">Melbourne</option>
			</select>
		</form>
		<div class="flex flex-col w-[80rem] gap-4">
			<button class="delete_city bg-red-300 rounded-[.3rem]">delete Selected City</button>
			<div class="flex gap-4">
				<input type="text" class="city_input" class="text-black">
				<button class="add_city bg-red-300  rounded-[.3rem]">add City</button>
			</div>
		</div>
	</div>
`;
	};
export default PatriciaSpa1Exam004CreateAFormThatAllowsTheUserToAddAndRemoveItemsFromADropdown001;
