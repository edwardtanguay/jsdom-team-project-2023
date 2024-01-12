const TomislavCreateARadioButtonFormControlAndSaveItsStateWithLocalstorage001 = () => {

    const questionsAndAnswers: [string[], string[]][] = [
        [["To be or not to be?"],
        ["(toBe || !toBe) ergibt immer 'true'."]],
        [["Was is ein Isotop?"],
        ["Wieso 'ein' Isotop? 'Iso' heißt 'gleich', und für einen Vergeich braucht man mindestens zwei."]],
        [["Welche Subnet-Mask wird für 15 Computer benötigt?"],
        ["255.255.255.224, in CIDR-Notation IP-Adresse/27"]],
        [["Was ist falsch an einem 'Wiederspruch'?"], ["Ein 'e' zu viel."]]
    ];

    const length: number = questionsAndAnswers.length;
    let toggleSwitchesStates: boolean[] = new Array(length);

    const savedData = readLocalStorage();
    if (savedData) {
        toggleSwitchesStates = savedData;
    }
    else {
        toggleSwitchesStates.fill(false);
    }

    setTimeout(() => {
        const solutionDiv = document.querySelector('.solution');

        for (let i = 0; i < length; i++) {
            // Elements
            const singleFieldDiv = document.createElement('div');
            const toggleSwitch = document.createElement('input');
            const questionDiv = document.createElement('div');
            const singleQuestionDiv = document.createElement('div');
            const answerText = document.createElement('div');

            // Element properties
            singleFieldDiv.classList.add('single-field-div');
            toggleSwitch.type = 'checkbox';
            toggleSwitch.checked = toggleSwitchesStates[i];
            toggleSwitch.classList.add('switches');
            questionDiv.classList.add('single-question');
            singleQuestionDiv.classList.add('single-question-div');
            singleQuestionDiv.textContent = questionsAndAnswers[i][0][0];
            answerText.textContent = questionsAndAnswers[i][1][0];
            answerText.classList.add('answers');

            // Hide answers at first page call (no localStorage file)
            if (!toggleSwitchesStates[i]) {
                answerText.style.display = 'none';
            }

            toggleSwitch.addEventListener('click', () => {
                if (!toggleSwitch.checked) {
                    answerText.style.display = 'none';
                    toggleSwitchesStates[i] = false;
                } else {
                    answerText.style.display = 'block';
                    toggleSwitchesStates[i] = true;
                }
                writeLocalStorage();
            });

            // Copy elements to DOM
            questionDiv.appendChild(singleQuestionDiv);
            singleFieldDiv.appendChild(toggleSwitch);
            singleFieldDiv.appendChild(questionDiv);
            solutionDiv?.appendChild(singleFieldDiv);
            solutionDiv?.appendChild(answerText);
        }
    });

    function readLocalStorage() {
        const jsonString = localStorage.getItem('tom_localStorageFile');
        if (jsonString) return JSON.parse(jsonString);
        return;
    }

    function writeLocalStorage() {
        const jsonFile = JSON.stringify(toggleSwitchesStates);
        localStorage.setItem('tom_localStorageFile', jsonFile);
    }



    return /*html*/`

        <style>
            .solution {
                margin : 2rem;
                font-size: 1.2rem; 
            }
            .single-field-div {
                background-color: #88aa88;
                color: black;
                display: flex;
                margin-bottom: .2rem;
                margin-top: .5rem;
                padding: .2rem 0 .2rem 1rem;
                gap: 2rem;
                border-radius:4px;
            }
            .switches {
                transform: scale(1.8);
                margin-left: .8rem;
            }
            .single-question-div {
                padding: .2rem 1rem .2rem 1rem;
                margin: .1rem;
                background-color: #cceecc;
                border-radius:4px;
            }
            .single-question {
                margin-right: .3rem;
            }
            .answers {
                background-color: #ffffaa;
                margin: 0 0 0 5rem;
                padding: .1rem 1rem .1rem 1rem;
                border-radius: 4px;
                color: black;
            }
        </style>

        <div class="solution"></div>
    `;
}
export default TomislavCreateARadioButtonFormControlAndSaveItsStateWithLocalstorage001;