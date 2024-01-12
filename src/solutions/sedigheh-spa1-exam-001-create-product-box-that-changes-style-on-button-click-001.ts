const SedighehSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
	  const container = document.querySelector(
		".container"
	  ) as HTMLElement;
	  const btnElem = document.querySelector(
		".btn"
	  ) as HTMLButtonElement;
	  
	  let isButtonActive = false;

	  btnElem.addEventListener("click", () => {
		isButtonActive = !isButtonActive; 
	  
		if (isButtonActive) {
		  container.classList.add("active");
		  btnElem.textContent = "Remove";
		  btnElem.style.backgroundColor ="black"
		  
		} else {
		  container.classList.remove("active");
		  btnElem.textContent = "Buy";
		  btnElem.style.backgroundColor ="green"
		}
	  })
	});
  
	// OTHER CODE HERE:
  
	return /*html*/ `
	  <div class="solution">
		<div class="container border border-solid border-gray-300 rounded p-4 flex flex-col justify-between gap-20 transition duration-500 ease-in-out">
		  <div class="ImgDiv h-40 flex gap-10">
			<img src="https://edwardtanguay.vercel.app/customImages/techBooks/practicalJamstack.jpg" alt="image" class="w-64 h-64" />
			<p class="ContentP flex justify-between gap-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, exercitationem.</p>
		  </div>
		  <button class="btn border border-solid border-green-500 rounded-lg w-20 h-10 ml-auto ">Buy</button>
		</div>
	  </div>
	`;
  };
  
  export default SedighehSpa1Exam001CreateProductBoxThatChangesStyleOnButtonClick001;
  