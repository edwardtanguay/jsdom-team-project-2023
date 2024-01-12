const EdwardPb2Exam006ValidatePassword001 = () => {

	// CODE HERE
	const passwords = ['birdhouse', 'password!!!!', 'Sekret00Story!','Sekret00Story!password','nnn','NNNNNNNNNNNN', 'aHaHaHaHa', '12345678', 'Geheim4u$$$', 'Geheim1234u$$$', '@$%&!ksdJjfsd'];
	const validatePassword = (password: string) => {

		if (password.length < 8) {
			return false;
		}

		if (!/[A-Z]/.test(password)) return false;

		if (!/[a-z]/.test(password)) return false;

		// if (!/[@$%&!]/.test(password)) return false; // also works
		if (!'@$%&!'.split('').some(m => password.includes(m))) return false;

		if (['123', 'password'].some(m => password.includes(m))) return false;
		
		return true;
	}

	return /*html*/`
	<div class="solution">
		${passwords.map(password => {
			return `<div>${password} - ${validatePassword(password) ? 'good' : 'bad'}</div>`;
		}).join('')}
	</div>
`;
}
export default EdwardPb2Exam006ValidatePassword001;