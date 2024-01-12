import { DpodTextManager } from './classes/DpodTextManager.js';
import * as tools from './tools.js';
import * as appModel from './appModel.js';
import { IExercise, ISolution } from './interfaces.js';

export const getAppData = () => {
	const appTitle = 'JS-DOM Team Project';
	const githubUrl = 'https://github.com/WD23-D04/042-js-function-practice';
	const solutions = appModel.getSolutions();
	const exercises = appModel.getExercises(solutions);
	const cards = appModel.getCards();
	return {
		appTitle,
		githubUrl,
		exercises,
		solutions,
		cards
	};
};

export const reduceExercisePathAndFileNameToIdCode = (pathAndFileName) => {
	let r = '';
	r = pathAndFileName;
	r = tools.chopLeft(r, 'src/exercises/');
	r = tools.chopRight(r, '.txt');
	return r;
}

export const getCards = () => {
	const pathAndFileNames = tools.getDirectoryPathAndFileNames('public/images/cards');
	const cards = pathAndFileNames.map(m => ({ pathAndFileName: tools.chopLeft(m, 'public/') }));
	return cards;
}

export const getSolutionAuthors = (allSolutions: any, exercise: IExercise) => {
	const authors: string[] = [];
	for (const solution of allSolutions) {
		if (solution.exerciseIdCode == exercise.idCode) {
			authors.push(solution.author);
		}
	}
	return authors;
} 

export const getExercises = (allSolutions: ISolution[] = []) => {
	const exercisePathAndFileNames = tools.getDirectoryPathAndFileNames('src/exercises');

	const exercises = [];
	for (const exercisePathAndFileName of exercisePathAndFileNames) {
		let content = tools.readContentFromFile(exercisePathAndFileName);
		content = `idCode::${appModel.reduceExercisePathAndFileNameToIdCode(exercisePathAndFileName)}\n${content}`;
		const dpodTextManager = new DpodTextManager(content);
		const exercise:any = dpodTextManager.getSimpleObject();
		exercise.solutionAuthors = allSolutions.length === 0 ? [] : appModel.getSolutionAuthors(allSolutions, exercise);
		exercises.push(exercise);
	}
	return exercises;
};

// src/solutions/edward-list-all-customers-001.ts
// list-all-customers
export const getExerciseIdAndAuthor = (solutionPathAndFileName: string) => {
	let r = '';
	r = solutionPathAndFileName;
	r = tools.chopLeft(r, 'src/solutions/');
	r = tools.chopRight(r, '.ts'); // edward-list-all-customers-001
	const parts = tools.breakIntoParts(r, '-');
	const author = tools.capitalizeFirstLetter(parts.shift());
	parts.pop();
	r = parts.join('-');
	return [r, author];
}

// src/solutions/edward-list-all-customers-001.ts
// EdwardListAllCustomers001
export const getComponentName = (solutionPathAndFileName: string) => {
	let r = '';
	r = solutionPathAndFileName;
	r = tools.chopLeft(r, 'src/solutions/');
	r = tools.chopRight(r, '.ts'); // edward-list-all-customers-001
	let parts = tools.breakIntoParts(r, '-');
	parts = parts.map(m => tools.capitalizeFirstLetter(m));
	r = parts.join('');
	return r;
}

// src/solutions/edward-list-all-customers-001.ts
// edward-list-all-customers-001
export const getSolutionIdCode = (solutionPathAndFileName: string) => {
	let r = '';
	r = solutionPathAndFileName;
	r = tools.chopLeft(r, 'src/solutions/');
	r = tools.chopRight(r, '.ts');
	return r;
}

export const getSolutions = () => {
	const solutionPathAndFileNames = tools.getDirectoryPathAndFileNames('src/solutions');
	const exercises = appModel.getExercises();

	const solutions : any[] = [];
	for (const solutionPathAndFileName of solutionPathAndFileNames) {
		const [exerciseIdCode, author] = getExerciseIdAndAuthor(solutionPathAndFileName);
		const componentName = getComponentName(solutionPathAndFileName);
		const idCode = getSolutionIdCode(solutionPathAndFileName);
		const shortTitle = `${author}'s solution`;
		const title = `${shortTitle} to "${exercises.find(m => m.idCode === exerciseIdCode).title}"`;
		solutions.push({
			idCode,
			shortTitle,
			title,
			pathAndFileName: solutionPathAndFileName,
			exerciseIdCode,
			author,
			componentName
		})
	}
	return solutions;
};