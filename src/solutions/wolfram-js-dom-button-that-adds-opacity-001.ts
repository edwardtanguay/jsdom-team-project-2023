// const WolframJsDomButtonThatAddsOpacity001 = () => {
//   setTimeout(() => {
//     const textP = document.querySelector<HTMLParagraphElement>("p");

//     if (textP) {
//       textP.style.opacity = 0.5;
//     }

//     const button = document.querySelector<HTMLButtonElement>("button");
//     if (button) {
//       button.addEventListener("click", (e) => {
//         e.preventDefault();
//         let currentOpacity = parseFloat(textP.style.opacity);
//         if (!isNaN(currentOpacity)) {
//           textP.style.opacity = currentOpacity + 0.1;
//         }
//       });
//     }
//   });
// };


// 	return /*html*/ `
// 	<div class="solution">
// 		<p>Hier steht der Text</p>
// 		<button>Add opacity</button>
// 	</div>
// `;
// };

// setTimeout(() => {
// 	const textP = document.querySelector<HTMLParagraphElement>("p");

// 	if (textP) {
// 		textP.style.opacity = "0.5";
// 	}

// 	const button = document.querySelector<HTMLButtonElement>("button");
// 	button.addEventListener("click",(e) => {
// 		e.preventDefault();
// 		textP.style.opacity = 1})

// },0)

// return /*html*/`
// <div class="solution">
// 	Create your solution in the file: <b>src/solutions/elvira-js-dom-button-that-adds-opacity-001.ts</b>
// 	<p>Lorem ipsum dolor sit amet.</p>
// 	<button>buy</button>
// </div>
// `;
// }

// export default WolframJsDomButtonThatAddsOpacity001;

const WolframJsDomButtonThatAddsOpacity001 = () => {
  setTimeout(() => {
    const textP = document.querySelector<HTMLParagraphElement>("p");

    if (textP) {
      textP.style.opacity = 0;
    }

    const button = document.querySelector<HTMLButtonElement>("button");
    if (button) {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        let currentOpacity = parseFloat(textP.style.opacity);
        if (!isNaN(currentOpacity)) {
          textP.style.opacity = currentOpacity + 0.1;
        }
      });
    }
  });

  return /*html*/ `
    <div class="solution">
      <p>Hier steht der Text</p>
      <button>Add opacity</button>
    </div>
  `;
};

export default WolframJsDomButtonThatAddsOpacity001;

