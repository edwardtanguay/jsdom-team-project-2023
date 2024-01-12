const SalarCreateBubblesort001 = () => {
	const bubbleSort = (arr: number[]) => {
		let n = arr.length;

		for (let i = 0; i < n; i++) {
			let swapped = false;
			for (let j = 0; j < n - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					let tmp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = tmp;
					swapped = true;
				}
			}
			if (!swapped) {
				break;
			}
		}

		return arr;
	};
	const nums = [234, 43, 55, 63, 5, 6, 235, 547, -22, -5, 1560];
	const sortedNums = [...nums].sort((a, b) => (a > b ? 1 : -1));
	const bsSortedNums = bubbleSort([...nums]);

	return /*html*/ `

	<div class="solution">

		<div>original array: <span class="text-red-700">${nums
			.map((m) => {
				return `${m}`;
			})
			.join(", ")}</span></div>

		<div>sort() array: <span class="text-green-600">${sortedNums
			.map((m) => {
				return `${m}`;
			})
			.join(", ")}</span></div>

		<div>bubbleSort() array: <span class="text-green-500">${bsSortedNums
			.map((m) => {
				return `${m}`;
			})
			.join(", ")}</span></div>

	</div>
	`;
};
export default SalarCreateBubblesort001;