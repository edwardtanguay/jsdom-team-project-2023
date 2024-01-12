const LukasPb2Exam005CreateClass001 = () => {
	// CODE HERE
	class Race {
		private name;
		private date;
		private maximumRunners;
		private currentRunners;

		constructor(
			name: string,
			date: string,
			maximumRunners: number,
			currentRunners: number
		) {
			this.name = name;
			this.date = date;
			this.maximumRunners = maximumRunners;
			this.currentRunners = currentRunners;
		}

		private getAvailableSpots() {
			return this.maximumRunners - this.currentRunners;
		}
		public display() {
			return /*html*/ `
			<h2>${this.name}</h2>
			<p>${this.date}</p>
			<p>An unforgettable Race with ${this.maximumRunners}</p>
			<p>There are still ${this.getAvailableSpots()} spots available, sign up now!</p>`;
		}
	}

	const race = new Race("Paris Half Marathon", "March 3, 2024", 40000, 25000);

	return /*html*/ `
	<div class="solution">
	${race.display()}
	</div>
`;
};
export default LukasPb2Exam005CreateClass001;
