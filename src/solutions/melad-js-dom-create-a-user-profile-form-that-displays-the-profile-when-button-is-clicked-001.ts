const MeladJsDomCreateAUserProfileFormThatDisplaysTheProfileWhenButtonIsClicked001 = () => {
	
	const userForm = document.createElement('form');
	userForm.id = 'user-form';
  

	userForm.style.margin = '100px'; 
	userForm.style.padding = '20px';
	userForm.style.color = 'blue'
	userForm.style.border = '4px solid orange';
  
	const nameLabel = document.createElement('label');
	nameLabel.textContent = 'Name:';
	const nameInput = document.createElement('input');
	nameInput.type = 'text';
	nameInput.name = 'name';
	nameInput.required = true;
	nameInput.style.margin = '8px 0'; 
    nameInput.style.padding = '8px'; 
  
	const emailLabel = document.createElement('label');
	emailLabel.textContent = 'Email:';
	const emailInput = document.createElement('input');
	emailInput.type = 'email';
	emailInput.name = 'email';
	emailInput.required = true;
	emailInput.style.margin = '8px 0'; 
    emailInput.style.padding = '8px'; 

  
	const ageLabel = document.createElement('label');
	ageLabel.textContent = 'Age:';
	const ageInput = document.createElement('input');
	ageInput.type = 'number';
	ageInput.name = 'age';
	ageInput.required = true;
	ageInput.style.margin = '8px'; 
    ageInput.style.padding = '8px'; 

	
  
	const submitButton = document.createElement('input');
	submitButton.type = 'submit';
	submitButton.value = 'Submit';
  
	
	submitButton.style.backgroundColor = 'green'; 
	submitButton.style.color = 'white'; 
	submitButton.style.padding = '10px 20px'; 
	submitButton.style.margin = '20px'  
  
	
	const userDataDiv = document.createElement('div');
	userDataDiv.id = 'user-data';
	userDataDiv.style.display = 'block';
  
	
	userDataDiv.style.padding = '40px'; 
	userDataDiv.style.backgroundColor = 'blue'; 
	const displayUserData = document.createElement('h2');
	displayUserData.textContent = 'User Data';
  
	const displayName = document.createElement('p');
	const displayEmail = document.createElement('p');
	const displayAge = document.createElement('p');
  
	displayName.innerHTML = '<strong>Name:</strong> <span id="display-name"></span>';
	displayEmail.innerHTML = '<strong>Email:</strong> <span id="display-email"></span>';
	displayAge.innerHTML = '<strong>Age:</strong> <span id="display-age"></span';
  
	userDataDiv.appendChild(displayUserData);
	userDataDiv.appendChild(displayName);
	userDataDiv.appendChild(displayEmail);
	userDataDiv.appendChild(displayAge);
  
	
	userForm.appendChild(nameLabel);
	userForm.appendChild(nameInput);
	userForm.appendChild(document.createElement('br'));
	userForm.appendChild(emailLabel);
	userForm.appendChild(emailInput);
	userForm.appendChild(document.createElement('br'));
	userForm.appendChild(ageLabel);
	userForm.appendChild(ageInput);
	userForm.appendChild(document.createElement('br'));
	userForm.appendChild(submitButton);
  
	document.body.appendChild(userForm);
	document.body.appendChild(userDataDiv);
  
	
	userForm.addEventListener('submit', function (e) {
	  e.preventDefault(); 
	  const formData = new FormData(userForm);
	  const name = formData.get('name');
	  const email = formData.get('email');
	  const age = formData.get('age');
  
	  // Display user data
	  const displayNameSpan = document.getElementById('display-name');
	  const displayEmailSpan = document.getElementById('display-email');
	  const displayAgeSpan = document.getElementById('display-age');
  
	  displayNameSpan.textContent = name;
	  displayEmailSpan.textContent = email;
	  displayAgeSpan.textContent = age;
  
	  userDataDiv.style.display = 'block'; 
	});
  
	return /*html*/`
	<div class="solution">
	 
	</div>
	`;
  };
  
  export default MeladJsDomCreateAUserProfileFormThatDisplaysTheProfileWhenButtonIsClicked001;
  