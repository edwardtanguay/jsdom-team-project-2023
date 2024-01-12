interface Workshop {
	title: string;
	details: string;
	isFavorite: boolean;
  }
  
  const workshops: Workshop[] = [
	{
	  title: "Introduction to TypeScript",
	  details: "Learn the basics of TypeScript and its benefits.",
	  isFavorite: false,
	},
	{
	  title: "Advanced JavaScript Concepts",
	  details: "Explore advanced JavaScript topics like closures and promises.",
	  isFavorite: false,
	},
	{
	  title: "React State Management",
	  details: "Master state management in React with Redux and Context API.",
	  isFavorite: false,
	},
	
  ];
  
  function updateWorkshopDetails(workshop: Workshop | null) {
	const detailsDiv = document.getElementById("workshop-details");
	if (detailsDiv) {
	  if (workshop) {
		detailsDiv.innerHTML = `<h2>${workshop.title}</h2><p>${workshop.details}</p>`;
	  } else {
		detailsDiv.innerHTML = "";
	  }
	}
  }
  
  
  const html = `
	<style>
	  .workshop-list {
		list-style: none;
		padding: 0;
		color: yellow;
		
	  }
	  .workshop-item {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
		border: 1px solid #ddd;
		padding: 30px;
		cursor: pointer;
	  }
	  .workshop-item:hover {
		background-color: blue;
	  }
	  .favorite-checkbox {
		margin-right: 10px;
		
	  }
	  .workshop-details {
		border: 1px solid #ddd;
		padding: 10px;
		min-height: 350px;
		background-color: chocolate;
	  }
	  .favorite-counter {
		margin-top: 30px;
	  }
	</style>
	<h1>Workshops</h1>
	<ul class="workshop-list">
	  ${workshops
		.map(
		  (workshop, index) => `
		  <li class="workshop-item" data-index="${index}">
			<input type="checkbox" class="favorite-checkbox" ${
			  workshop.isFavorite ? "checked" : ""
			}>
			<span>${workshop.title}</span>
		  </li>
		`
		)
		.join("")}
	</ul>
	<div id="workshop-details" class="workshop-details"></div>
	<p class="favorite-counter">
	  Favorites: <span id="favorite-count">0</span>
	</p>
  `;
  
  
  document.body.innerHTML = html;
  
  function updateFavoriteCounter() {
	const favoriteCount = workshops.filter((workshop) => workshop.isFavorite).length;
	const favoriteCountElement = document.getElementById("favorite-count");
	if (favoriteCountElement) {
	  favoriteCountElement.textContent = favoriteCount.toString();
	}
  }
  
  const workshopItems = document.querySelectorAll(".workshop-item");
  workshopItems.forEach((workshopItem, index) => {
	const checkbox = workshopItem.querySelector(".favorite-checkbox");
	const title = workshopItem.querySelector("span");
	if (checkbox && title) {
	  workshopItem.addEventListener("click", () => {
		updateWorkshopDetails(workshops[index]);
	  });
  
	  checkbox.addEventListener("click", (e) => {
		workshops[index].isFavorite = !workshops[index].isFavorite;
		updateFavoriteCounter();
		e.stopPropagation();
	  });
	}
  });
  
  
  updateFavoriteCounter();
  updateWorkshopDetails(null); 
  