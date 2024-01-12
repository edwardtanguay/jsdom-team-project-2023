const LukasJsDomCreateListOfConferenceWorkshopsWithFavoritesCheckbox001 =
	() => {
		// ANY CODE THAT USES querySelector() or getElementById() HERE:
		setTimeout(() => {
			const options =
				document.querySelectorAll<HTMLDivElement>(".info_options div");
			const infoBox = document.querySelector<HTMLDivElement>(".info_box");
			const inputs = document.querySelectorAll<HTMLInputElement>("input");
			let selectedOption: HTMLDivElement;
			if (options && infoBox && inputs) {
				options.forEach((option) => {
					option.addEventListener("click", (e) => {
						// const directTarget = e.target as
						// 	| HTMLDivElement
						// 	| HTMLLabelElement
						// 	| HTMLInputElement;
						const eventContainer =
							e.currentTarget as HTMLDivElement;
						if (selectedOption) {
							selectedOption.classList.remove("bg-green-400");
						}
						eventContainer.classList.add("bg-green-400");
						selectedOption = eventContainer;
						const heading =
							document.querySelector<HTMLHeadingElement>(
								".info_box_heading"
							);
						const text =
							document.querySelector<HTMLParagraphElement>(
								".info_box_text"
							);
						if (heading && text) {
							switch (selectedOption.id) {
								case "input_div_1":
									heading.innerText = "this is Text 1";
									text.innerText =
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, exercitationem temporibus. Qui, consectetur vero modi fugiat, provident iusto consequatur blanditiis aliquam, cumque debitis dicta voluptas amet molestias molestiae doloribus.";
									break;
								case "input_div_2":
									heading.innerText = "this is Text 2";
									text.innerText =
										"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum vel minima odit, sapiente temporibus saepe nam aut illo delectus autem sed error ratione exercitationem explicabo nesciunt et quis ullam.";

									break;
								case "input_div_3":
									heading.innerText = "this is Text 3";
									text.innerText =
										"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum suscipit dicta asperiores! Possimus, laborum similique illum quaerat quasi accusantium odit repellendus. Delectus, pariatur a.";
									break;
								case "input_div_4":
									heading.innerText = "this is Text 3";
									text.innerText =
										"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi iste exercitationem, alias voluptatibus aspernatur fugit itaque natus assumenda maxime earum ipsam dolorem provident odit quisquam, laborum eaque.";
									break;

								default:
									break;
							}
						}
					});
				});
				let logDataAmount = 0;
				inputs.forEach((input) => {
					input.addEventListener("click", (e) => {
						e.stopPropagation();
						const directTarget = e.target as HTMLInputElement;
						const logData =
							document.querySelector<HTMLParagraphElement>(
								".logdata"
							);
						if (directTarget.checked) {
							logDataAmount++;
						} else {
							logDataAmount--;
						}
						if (logData) {
							logData.innerText = `Amount of checked Boxes: ${logDataAmount}`;
						}
					});
				});
			}
		});

		// OTHER CODE HERE:

		return /*html*/ `
	<div class="solution flex flex-col">
		<div class="flex gap-2">
			<div class="flex flex-col gap-2 w-1/2 info_options">
				<div class="flex gap-4 justify-between pl-4 pr-4 pt-2 pb-2 bg-blue-500" id="input_div_1"><label for="input_1">Using React Router 6.4</label><input type="checkbox" id="input_1" class=""></div>
				<div class="flex gap-4 justify-between pl-4 pr-4 pt-2 pb-2 bg-blue-500" id="input_div_2"><label for="input_2">Redux in Practise</label><input type="checkbox" id="input_2" class="" ></div>
				<div class="flex gap-4 justify-between pl-4 pr-4 pt-2 pb-2 bg-blue-500" id="input_div_3"><label for="input_3">Devops for Developers</label><input type="checkbox" id="input_3" class="" ></div>
				<div class="flex gap-4 justify-between pl-4 pr-4 pt-2 pb-2 bg-blue-500" id="input_div_4"><label for="input_4">Hetzner Hosting Made Easy</label><input type="checkbox"  id="input_4" class="" ></div>
			</div>
			<div class="flex flex-col w-1/2 info_box pl-4 pr-4"><h2 class="info_box_heading text-center"></h2><p class="info_box_text"></p></div>
		</div>
		<p class="logdata">Amount of checked Boxes: 0</p>
	</div>
`;
	};
export default LukasJsDomCreateListOfConferenceWorkshopsWithFavoritesCheckbox001;
