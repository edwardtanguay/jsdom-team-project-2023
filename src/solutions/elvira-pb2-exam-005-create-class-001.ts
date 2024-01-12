const ElviraPb2Exam005CreateClass001 = () => {

	// CODE HERE 
	//nicht fertig
	class Race {
		private name = "";
		private date = "";
		private maximumRunners = 0;
		private currentRunners = 0;

		constructor(
			name: string, 
			date: string, 
			maximumRunners: number, 
			currentRunners: number) {
				this.name = name;
				this.date = date;
				this.maximumRunners = maximumRunners;
				this.currentRunners = currentRunners;
			}
		private getAvailableSpots() {
			return this.maximumRunners - this.currentRunners;
		}
		public display() {
			return `
			<h2 class="text-2xl">${this.name}</h2>	
			<div>${this.date}</div>
			<div>An unforgettable race with ${this.maximumRunners} runners.</div>
			<div>There are still ${this.getAvailableSpots()} spots avaailable, sign up now!</div>
			`;
		}
	}
	const race = new Race('Paris Half Marathon', 'March 3, 2024', 40000, 37000)

	return /*html*/`
	<div class="solution">
		${race.display()}
	</div>
`;
}
export default ElviraPb2Exam005CreateClass001;