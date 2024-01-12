const CreateBubbleSort = () => {

  const numbers = [123, 5, 446, 14, 32, 78, 71, 369, 0, 578, 5];
  const numbersSort = () => {
    return [...numbers].sort((a, b) => a - b);
  };
  const sortedNumbers = numbersSort();

  const numberSort = () => {

    const arr = [...numbers]; // Create a copy of the original array 
    const n = arr.length;
    let swapped;

    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);

    return arr; 
  };

  const sortedNumber = numberSort();

  return /*html*/`
  <div>
    <div>
      original Array: <span class="text-red-500">${numbers.map(m => m).join("  , ")}</span> 
    </div>
    <div>
      sort Array: <span class="text-green-500">${sortedNumbers.join("  , ")}</span> 
    </div>
    <div>
      bubble sort Array: <span class="text-yellow-500">${sortedNumber.join(" , ")}</span> 
    </div>
  </div>
  `;
}

export default CreateBubbleSort