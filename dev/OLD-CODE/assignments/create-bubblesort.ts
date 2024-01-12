import * as tools from "../../tools";

const CreateBubbleSort = () => {

  const url = new URL(tools.getCurrentUrl());
  const user = url.pathname.split("/")[1];
    return /*html*/`

  <div>
    <div class="instructions">Create BubbleSort.</div>
    <div class="solutionLink">
      <a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/create-bubblesort.ts" target="_blank">view solution</a>
    </div>
    <div class="solution">
    <div>CREATE SOLUTION HERE</div>
  </div>

  `; 
  }

  export default CreateBubbleSort