const SedighehJsDomChangeStyleOfElements001 = () => {
	setTimeout(() => {
	  const infoElm = document.querySelector<HTMLDivElement>(".infoClass");
	  const eventsElm = document.querySelector<HTMLDivElement>(".eventsClass");
  
	  if (infoElm) {
		infoElm.style.color = "blue";
		infoElm.style.backgroundColor = "green";
		infoElm.style.height = "200px";
		infoElm.style.width = "300px";
		infoElm.style.display = "flex";
		infoElm.style.alignItems = "center";
		infoElm.style.justifyContent = "center";
		infoElm.style.fontSize= "50px";
	  }
	  if (eventsElm) {
		eventsElm.style.color = "yellow";
		eventsElm.style.backgroundColor = "red";
		eventsElm.style.height = "100px";
		eventsElm.style.width = "150px";
		eventsElm.style.display = "flex";
		eventsElm.style.alignItems = "center";
		eventsElm.style.justifyContent = "center";
		eventsElm.style.fontSize = "30px";
		eventsElm.style.marginTop = "10px" 
	  }
	});
  
	return /*html*/ `
	  <div class="solution flex gap-4">
		  <div class="infoClass">Info</div>
		  <div class="eventsClass">Events</div>
	  </div>
	`;
  };
  
  export default SedighehJsDomChangeStyleOfElements001;
  

  