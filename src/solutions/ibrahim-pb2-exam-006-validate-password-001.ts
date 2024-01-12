const IbrahimPb2Exam006ValidatePassword001 = () => {

	// CODE HERE
	
function validatePassword(password) {
   
    if (password.length < 8) {
        return false;
    }


    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }

    if (!/[@$%&!]/.test(password)) {
        return false;
    }


    if (/password|123/i.test(password)) {
        return false;
    }


    return true;
}

const passwords = ['birdhouse', 'password!!!!', 'Sekret00Story!', '12345678', 'Geheim4u$$$'];

passwords.forEach(password => {
    const isGood = validatePassword(password);
    console.log(`${password} - ${isGood ? 'Gut' : 'X'}`);
});


	return /*html*/`
	<div class="solution">
	${passwords.map(password => {
			return `<div>${password} - ${validatePassword(password) ? 'Gut' : 'X'}</div>`;
		}).join('')}
	</div>
`;
}
export default IbrahimPb2Exam006ValidatePassword001;