export interface IExercise {
	idCode: string;
	author: string;
	whenCreated: string;
	title: string;
	descriptionMarkdown: string;
	descriptionHtml: string;
	categories: string;
	difficulty: string;
	solutionAuthors: string[];
}

export interface ISolution {
	idCode: string;
	shortTitle: string;
	title: string;
	pathAndFileName: string;
	exerciseIdCode: string;
	author: string;
	componentName: string;
}

export interface ICard {
	pathAndFileName: string;
}

export interface IAppData {
	appTitle: string;
	githubUrl: string;
	exercises: IExercise[];
	solutions: ISolution[];
	cards: ICard[];
}

