const LukasSpa1Exam007ProgramLikeIts1999001 = () => {
	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {
		const solution = document.querySelector<HTMLDivElement>(".solution");
		let userPrompt;
		do {
			userPrompt = prompt("What is your name?");
		} while (userPrompt !== null && userPrompt.trim() === "");

		if (solution && userPrompt) {
			solution.innerHTML = `Hello ${userPrompt},\n
        While the window.prompt command is still available in web development,
        its usage has become less common, especially in modern web applications.\n
        The reason for its declining usage is that it doesn't provide a good user
        experience in modern web applications. Web developers tend to use more
        advanced and user-friendly methods of collecting user input, such as HTML
        forms, input elements, and various JavaScript libraries and frameworks.
        These alternatives offer more flexibility and control over the user interface,
        and they can be styled and integrated more seamlessly into web applications.\n
        Additionally, window.prompt can be perceived as intrusive and is often associated
        with older, less user-friendly web applications. Its use is discouraged for creating
        modern, responsive, and user-friendly web applications.`;
		}
	});

	// OTHER CODE HERE:

	return /*html*/ `
	<div class="solution">
	</div>
`;
};
export default LukasSpa1Exam007ProgramLikeIts1999001;
