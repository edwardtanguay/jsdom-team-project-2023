const EdwardCreateBikeClass001 = () => {

	class Bike {

		private name: string = '';
		private color: string = '';

		constructor(name: string, color: string) {
			this.name = name;
			this.color = color;
		}

		display() {
			return `The ${this.name} bike is ${this.color}`;
		}

		start() {
			return `The ${this.name} bike is starting...`;
		}

		break() {
			return `The ${this.name} bike is breaking...`;
		}

		stop() {
			return `The ${this.name} bike is stopping...`;
		}

	}

	const hilandBike = new Bike('Hiland', 'green');
	const euroBike = new Bike('EuroBike', 'red');
	const trekBike = new Bike('TrekBike', 'blue');

	return /*html*/ `

		<div class="solution">
			<section>
				<h2 class="font-bold">${hilandBike.display()}</h2>
				<ul>
					<li>${hilandBike.start()}</li>
					<li>${hilandBike.break()}</li>
					<li>${hilandBike.stop()}</li>
				</ul>
			</section>
			<section class="mt-3">
				<h2 class="font-bold">${euroBike.display()}</h2>
				<ul>
					<li>${euroBike.start()}</li>
					<li>${euroBike.break()}</li>
					<li>${euroBike.stop()}</li>
				</ul>
			</section>
			<section class="mt-3">
				<h2 class="font-bold">${trekBike.display()}</h2>
				<ul>
					<li>${trekBike.start()}</li>
					<li>${trekBike.break()}</li>
					<li>${trekBike.stop()}</li>
				</ul>
			</section>
		</div>

	`;
};

export default EdwardCreateBikeClass001;
