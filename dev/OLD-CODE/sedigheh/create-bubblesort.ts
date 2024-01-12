import * as tools from "../../tools";

const CreateBubbleSort = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
  const numbers = [4,45,3,2,7,9,23,-1,0,12,9,8]
  
  function bblSort(arr:number[]):void{
  
    for (var i = 0; i < arr.length; i++) {
  
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
  
            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
  
                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // const sortNumbers = [...numbers].sort(function(a,b){
  }
 const sortNumbers = structuredClone(numbers).sort(function(a,b){

    if(a<b)return -1;
    if(b>a)return 1;
    return 0
  });
  const bblnumbers = [...numbers] 
  bblSort(bblnumbers)

    return /*html*/`

  <div>
    <div class="instructions">Create BubbleSort.</div>
    <div class="solutionLink">
      <a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/create-bubblesort.ts" target="_blank">view solution</a>
    </div>
    <div class="solution">
    
    <div> Original array: <span class="text-red-500">${numbers.join(', ')}</span> </div>
  
    <div> sort(): <span class="text-green-800">${sortNumbers.join(', ')}</span> </div>

    <div> bubblesort(): <span class="text-green-800 font-bold">${bblnumbers.join(', ')}</span> </div>
    

  </div>

  `; 
  }

  export default CreateBubbleSort