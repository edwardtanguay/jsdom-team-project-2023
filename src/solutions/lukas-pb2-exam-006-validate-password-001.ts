const LukasPb2Exam006ValidatePassword001 = () => {
	// CODE HERE
	const passwords = [
		"birdhouse",
		"Password!!!!",
		"Sekret00Story!",
		"12345678",
		"Geheim4u$$$",
		"EmHsdPaIimDfATULw	",
		"PaulMoreno",
		"teTs132!",
	];

	const validatePassword = (password: string) => {
		if (password.length < 8) {
			return "bad";
		} else if (
			password.search(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$%&!]).*$/gm)
		) {
			return "bad";
		} else if (
			password.toLowerCase().includes("password") ||
			password.includes("123")
		) {
			return "bad";
		}
		return "good";
	};

	return /*html*/ `
	<div class="solution">
		${passwords
			.map((password) => {
				return /*html*/ `
			<div>${password}, <span class="text-orange-300">${validatePassword(
					password
				)}</span> </div>`;
			})
			.join("||")}
	</div>
`;
};
export default LukasPb2Exam006ValidatePassword001;
