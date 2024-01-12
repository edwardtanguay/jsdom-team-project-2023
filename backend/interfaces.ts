export interface IImportExercise {
	author: string;
	title: string;
	descriptionMarkdown: string;
	difficulty: number;
	categories: string;
	solutionAuthors: string[];
}

export interface IExercise extends IImportExercise {
	idCode: string;
	descriptionHtml: string;
}

export interface IDataType {
	idCode: string;
	title: string;
	value: string | number;
}

export interface ISolution {
	author: string;
	componentName: string;
	idCode: string;
	pathAndFileName: string;
	shortTitle: string;
	title: string;
}
/*
CONSOLIDATED LINES:

author::edward
title::List all customers
descriptionMarkdown::List all customers\n- step one\n- step two 
difficulty::3 // 1=easy, 5=difficult
categories::higherOrderFunctions // comma-separated id-codes
*/