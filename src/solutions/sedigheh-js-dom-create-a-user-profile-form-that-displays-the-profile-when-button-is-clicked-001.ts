const SedighehJsDomCreateAUserProfileFormThatDisplaysTheProfileWhenButtonIsClicked001 = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {

    const fisrNameInputElem = document.querySelector<HTMLInputElement>('#firstName');

    const lastNameInputElem = document.querySelector<HTMLInputElement>('#lastName');

    const emailInputElem = document.querySelector<HTMLInputElement>('#email');

    const selectInputElem = document.querySelector<HTMLSelectElement>('#level');
    

    

    const submitBtn = document.querySelector('.Btn');
    submitBtn?.addEventListener('click',(e)=>{
      e.preventDefault();
      const elem = e.target;
      const firstNameInputValue = fisrNameInputElem?.value;
      const selectInputElemValue = selectInputElem?.options[selectInputElem.selectedIndex].text;
     
    })

 
    

	});

	// OTHER CODE HERE:
	
	
	return /*html*/`
	<div class="solution">
  <form id="userDataForm" style="display: flex; flex-direction: column; max-width: 300px;">
    <label for="firstName" style="margin-bottom: 8px;">First Name</label>

    <input type="text" id="firstName" name="firstName" required style="margin-bottom: 16px; padding: 8px; color: blue;">

    <label for="lastName" style="margin-bottom: 8px;">Last Name</label>
    <input type="text" id="lastName" name="lastName" required style="margin-bottom: 16px; padding: 8px; color: blue;">

    <label for="email" style="margin-bottom: 8px;">Email</label>
    <input type="email" id="email" name="email" required style="margin-bottom: 16px; padding: 8px; color: blue;">

    <label for="level" style="margin-bottom: 8px;">Level</label>
    <select id="level" name="level" required style="margin-bottom: 16px; padding: 8px; color: blue;">
      <option value="senior">Senior</option>
      <option value="junior">Junior</option>
    </select>

    <label for="skills" style="margin-bottom: 8px;">Skills</label>
    <div>
      <input type="checkbox" id="react" name="skills" value="React">
      <label for="react">React</label>
    </div>
    <div>
      <input type="checkbox" id="angular" name="skills" value="Angular">
      <label for="angular">Angular</label>
    </div>
    <div>
      <input type="checkbox" id="vuejs" name="skills" value="Vue.js">
      <label for="vuejs">Vue.js</label>
    </div>

    <button class = "Btn" type="submit" style="padding: 8px; border: 1px solid #ccc; transition: border 0.3s;">Submit</button>
  </form>
  <div class="summeryInfos"> </div>
	</div>
`;
}
export default SedighehJsDomCreateAUserProfileFormThatDisplaysTheProfileWhenButtonIsClicked001;