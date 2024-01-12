const TomislavSpa1Exam003CreateAQuizMakerFormThatBlanksOutWordsInASentence001 = () => {

    // ANY CODE THAT USES querySelector() or getElementById() HERE:
    setTimeout(() => {
        const text = document.getElementById("text") as HTMLInputElement;
        const markers = document.getElementById("markers") as HTMLInputElement;
        const buttonCreate = document.getElementById("button-create");
        const output = document.querySelector(".output") as HTMLDivElement;

        if (text && markers && buttonCreate && output) {
            buttonCreate.addEventListener("click", (e) => {
                e.preventDefault();
                const regEx = new RegExp(
                    `\\${markers.value[0]}(.*?)\\${markers.value[1]}`, "g"
                );
                output.innerText = text.value.replace(regEx, (_) => "____");
            });
        }
    });

    // OTHER CODE HERE:

    return /*html*/`

        <style>
            .solution {
                margin: 1rem;
                padding: 2rem 1.5rem 2rem 1.5rem;
                border: 1px solid #ccc;
                border-radius: 1.5rem;
                background-color: #ccffcc;
                color: black;
            }

            .flex-box {
                display: flex;
                flex-direction: column;
                margin: 0 0 1rem 0;
                font-size: 1.2rem;
            }

            #text {
                height: 3rem;
                border: 2px solid #666666;
                border-radius: 8px;
                font-size: 1.2rem;   
            }

            #markers {
                width: 7rem;
                height: 3rem;
                border: 2px solid #666666;
                border-radius: 12px;
                font-size: 1.2rem;
                padding-left: 1rem    
            }

            button {
                background-color: #e8e8e8;
                color: black;
                border: 2px solid #666666;
                border-radius: 8px;
                cursor: pointer;
                height: 2.2rem;
                font-size: 1.2rem;
                padding: 0 1rem 0 1rem;
                margin-top: .5rem;
            }

            button:hover {
                background-color: #ffffff;
            }

            .output {
                background-color: #eeeebb;
                font-size: 1.3rem;
                color: black;
                height: 2.5rem;
                margin: 1.5rem;
                margin-top: 4rem;
                width: fit-content;
                min-width: 8rem;
                padding: 0 1rem 0 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>

	<div class="solution">
        <form>
            <label class="flex-box">Sentence
	            <input type="text" id="text">
            </label>
            <label class="flex-box">Markers
                <input type="text" id="markers">
            </label>
            <label>
                <button id="button-create">Create Quiz Question</button>
            </label>
        </form>
	</div>
    <div class="output"></div>
`;
}
export default TomislavSpa1Exam003CreateAQuizMakerFormThatBlanksOutWordsInASentence001;