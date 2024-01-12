const SedighehJsDomCreateListOfConferenceWorkshopsWithFavoritesCheckbox001 = () => {
	let favoritesCount = 0; 
  
	
	const displayWorkshopDetails = (workshopTitle: string, workshopDescription: string) => {
	  return /*html*/ `
		<div class="flex flex-col justify-center items-center bg-red-300 gap-4 p-4 rounded">
		  <h1 class="text-3xl text-red-700 mb-7">${workshopTitle}</h1>
		  <p>${workshopDescription}</p>
		</div>
	  `;
	};
  
	setTimeout(() => {
	  const workshopsContainer = document.querySelector(".solution");
	  const messageDiv = document.querySelector(".messageDiv1");
  
	  workshopsContainer!.addEventListener("click", (e) => {
		const target = e.target as HTMLElement;
  
	
		if (target.tagName === "INPUT" && (target as HTMLInputElement).type === "checkbox") {
		  const workshopTitle = target.parentElement?.querySelector("p")?.textContent || "";
		  const workshopDescription = "Workshop details are not available.";
  
		 
		  if ((target as HTMLInputElement).checked) {
			messageDiv!.innerHTML = displayWorkshopDetails(workshopTitle, workshopDescription);
		  } else {
			messageDiv!.innerHTML = ""; 
		  }
  
		  favoritesCount += (target as HTMLInputElement).checked ? 1 : -1;
	
		  document.querySelector(".favoritesCount")!.textContent = `${favoritesCount} Favorites`;
		}
	  });
	});
  
	return /*html*/ `
	  <div class="w-full flex gap-6">
		<form class="solution flex flex-col gap-4 w-full">
		  <div class="flex gap-4 bg-slate-400 p-4 rounded-md text-black justify-between container">
			<p>Using React Router 6.4 </p>
			<input class="checkBox_1" type="checkbox">
		  </div>
		  <div class="flex gap-4 bg-slate-400 p-4 rounded-md text-black justify-between container">
			<p>Redux in Practice</p>
			<input class="checkBox" type="checkbox">
		  </div>
		  <div class="flex gap-4 bg-slate-400 p-4 rounded-md text-black justify-between container">
			<p>Devops for developers </p>
			<input class="checkBoxs" type="checkbox">
		  </div>
		  <div class="flex gap-4 bg-slate-400 p-4 rounded-md text-black justify-between container">
			<p>Hetzner Hosting Made Easy</p>
			<input class="checkBoxs" type="checkbox">
		  </div>
		</form>
		<div class="messageDiv1"></div>
		<div class="favoritesCount">0 Favorites</div>
	  </div>
	`;
  };
  
  export default SedighehJsDomCreateListOfConferenceWorkshopsWithFavoritesCheckbox001;
  

