const LukasCreateBikeClass001 = () => {
	// CODE HERE
	class Bike {
		private color = "";
		private name = "";
		constructor(color: string, name: string) {
			this.color = color;
			this.name = name;
		}
		public start = () => {
			return `The ${this.color} ${this.name} is starting...`;
		};
		public break = () => {
			return `The ${this.color} ${this.name} is breaking...`;
		};
		public stop = () => {
			return `The ${this.color} ${this.name} is stoping...`;
		};
	}

	const bike1 = new Bike("Green", "Hiland");
	const bike2 = new Bike("red", "EuroBike");
	const bike3 = new Bike("blue", "TrekBike");

	return /*html*/ `
	<div class="solution">
	<div class="text-green-500">${bike1.start()}  ${bike1.break()}  ${bike1.stop()}</div>
	<div class="text-red-500">${bike2.start()}  ${bike2.break()}  ${bike2.stop()}</div>
	<div class="text-cyan-300">${bike3.start()}  ${bike3.break()} 3${bike1.stop()}</div>
</div>
`;
};
export default LukasCreateBikeClass001;
