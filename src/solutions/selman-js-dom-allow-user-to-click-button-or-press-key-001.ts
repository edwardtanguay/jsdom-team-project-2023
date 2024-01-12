const SelmanJsDomAllowUserToClickButtonOrPressKey001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const saveButton = document.querySelector("#saveButton");
		const printButton = document.querySelector("#printButton");
		const mockTextCanvas = document.querySelector("#mockTextCanvas");

		function updateMockText(message: string) {
			if (mockTextCanvas) {
				mockTextCanvas.innerHTML = message;
			}
		}

		function saveFile() {
			updateMockText("File saved.");
		}

		function printFile() {
			updateMockText("File printed.");
		}

		saveButton?.addEventListener("click", () => {
			saveFile();
		});
		printButton?.addEventListener("click", () => {
			printFile();
		});

		document.body.addEventListener("keydown", (event) => {
			const element = event.key;
			if (element === "s" || element === "S") {
				saveFile();
			} else if (element === "p" || element === "P") {
				printFile();
			}
		});
	});

	return /*html*/ `
	<div class="solution">
		<button id="saveButton" class="border border-black rounded-md bg-green-500 p-4">Save or press "S"</button>
		<button id="printButton" class="border border-black rounded-md bg-orange-500 p-4">Print or press "P"</button>
		<div id="mockTextCanvas" class="mt-2 p-2"></div>
	</div>
`;
};
export default SelmanJsDomAllowUserToClickButtonOrPressKey001;
