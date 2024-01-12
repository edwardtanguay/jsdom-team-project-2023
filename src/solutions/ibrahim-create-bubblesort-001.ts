import CreateBubbleSort from "./ghulam-create-bubblesort-001";

const IbrahimCreateBubblesort001 = () => {

	const bubbleSort = (arr) => {
		let n = arr.length, swapped;
		do {
		  swapped = false;
		  for (let i = 0; i < n - 1; i++) {
			if (arr[i] > arr[i + 1]) {
			  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
			  swapped = true;
			}
		  }
		} while (swapped);
		return arr;
	  };
	  
	  const nums = [64, 6, 999, 263, 2, 0, 65, -23, 12000, 12, 6, 1];
	  
	  const sortedNums = [...nums].sort((a, b) => a - b);
	  const bsSortedNums = bubbleSort([...nums]);
	  
	  const displayArray = (arr) => arr.map(m => `${m}`).join(", ");
	  
	  return /*html*/`
	  <div class="solution">
		<div>original array: <span class="text-red-600">${displayArray(nums)}</span></div>
		<div>sort() array: <span class="text-green-800">${displayArray(sortedNums)}</span></div>
		<div>bubbleSort() array: <span class="text-green-800">${displayArray(bsSortedNums)}</span></div>
	  </div>
	  `;
			
}

export default IbrahimCreateBubblesort001;