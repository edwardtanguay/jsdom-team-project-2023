const IbrahimCreateBikeClass001 = () => {

	// CODE HERE
	class Bike {
		constructor(name, color) {
			this.name = name;
			this.color = color;
		}
	
		display() {
			return `The ${this.name} bike is ${this.color}`;
		}
	
		action(actionName) {
			return `The ${this.name} bike is ${actionName}...`;
		}
	}
	
	const hilandBike = new Bike('Hiland', 'green');
	const euroBike = new Bike('EuroBike', 'red');
	const trekBike = new Bike('TrekBike', 'blue');
	
	const createSection = (bike) => {
		return `
			<section>
				<h2 class="font-bold">${bike.display()}</h2>
				<ul>
					<li>${bike.action('starting')}</li>
					<li>${bike.action('breaking')}</li>
					<li>${bike.action('stopping')}</li>
				</ul>
			</section>
		`;
	};
	
	return /*html*/ `

		<div class="solution">
			${createSection(hilandBike)}
			<br>
			${createSection(euroBike)}
			<br>
			${createSection(trekBike)}
		</div>

	`;
};
export default IbrahimCreateBikeClass001;