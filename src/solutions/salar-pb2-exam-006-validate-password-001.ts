const SalarPb2Exam006ValidatePassword001 = () => {
	const passwords = ['salar.shabahang', 'password!!!!', 'Sekret00Story!', 'Sekret00Story!password', 'Coding_', '1234Ka_.;', 'Asistenten', '12345678³²²', 'Geheim4u$$$', '1234u$$$', '@$%&!ksdJjfsd'];
	function validatePassword(password:string) {
		if (password.length < 6 || password.length > 20) {
			return false;
		}

		let hasDigit = false;
		let hasLowercase = false;
		let hasUppercase = false;
		let hasSpecialChar = false;
		const specialChars = "!@#$%^&*()-+.";

		for (let i = 0; i < password.length; i++) {
			const char = password[i];

			if (/[0-9]/.test(char)) {
				hasDigit = true;
			} else if (/[a-z]/.test(char)) {
				hasLowercase = true;
			} else if (/[A-Z]/.test(char)) {
				hasUppercase = true;
			} else if (specialChars.includes(char)) {
				hasSpecialChar = true;
			}

			if (hasDigit && hasLowercase && hasUppercase && hasSpecialChar) {
				return true;
			}
		}
		return false;
	}
	console.log(validatePassword("Abcdef123!"));
	console.log(validatePassword("abc123"));


	return /*html*/`
	<div class="solution">
	${passwords.map(password => {
		return `<div>${password} - ${validatePassword(password) ? '&#9989;' : '&#10060;'}</div>`;
	}).join('')}
	</div>
`;
}
export default SalarPb2Exam006ValidatePassword001;