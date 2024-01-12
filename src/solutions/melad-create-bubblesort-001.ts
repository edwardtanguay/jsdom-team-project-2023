const MeladCreateBubblesort001 = () => {

	// CODE HERE

	const bubbleSort = (arr: number[]) => {
		let n = arr.length;
		let swapped;
	
		do {
		  swapped = false;
	
		  for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
			  let temp = arr[i];
			  arr[i] = arr[i + 1];
			  arr[i + 1] = temp;
			  swapped = true;
			}
		  }
		} while (swapped);
	
		return arr;
	  };
	
	  const nums = [64, 6, 999, 263, 2, 0, 65, -23, 12000, 12, 6, 1];
	  const sortedNums = [...nums].sort((a, b) => (a > b ? 1 : -1));
	  const bsSortedNums = bubbleSort([...nums]);

	return /*html*/`
	<div class="solution">
	   
	<div>original array: <span class="text-red-600">${nums
        .map((m) => {
          return `${m}`;
        })
        .join(", ")}</span></div>

			<div>sort() array: <span class="text-green-800">${sortedNums
        .map((m) => {
          return `${m}`;
        })
        .join(", ")}</span></div>

			<div>bubbleSort() array: <span class="text-green-800">${bsSortedNums
        .map((m) => {
          return `${m}`;
        })
        .join(", ")}</span></div>
		
	</div>
`;
}
export default MeladCreateBubblesort001;