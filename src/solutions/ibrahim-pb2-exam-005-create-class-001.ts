const IbrahimPb2Exam005CreateClass001 = () => {

	// CODE HERE
	class Race {
		private name: string;
		private date: string;
		private maximumRunners: number;
		private currentRunners: number;
	
		constructor(name: string, date: string, maximumRunners: number, currentRunners: number) {
			this.name = name;
			this.date = date;
			this.maximumRunners = maximumRunners;
			this.currentRunners = currentRunners;
		}
	
		private getAvailableSpots(): number {
			return this.maximumRunners - this.currentRunners;
		}
	
		public display(): string {
			const availableSpots = this.getAvailableSpots();
	
			return /*html*/ `
				<div class="solution">
					<h2>${this.name}</h2>
					<div>${this.date}</div>
					<div>Total Runners: ${this.maximumRunners}</div>
					<div>Available Spots: ${availableSpots}</div>
				</div>
			`;
	}
}

const race = new Race('Paris Half Marathon', 'March 3, 2024', 40000, 37000);
return /*html*/`
	<div class="solution">
		${race.display()}	
	</div>
`;
}
export default IbrahimPb2Exam005CreateClass001;