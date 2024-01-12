import { IImportExercise } from "../interfaces.js";
import * as tools from '../tools.js';

export class ExerciseManager {

	private author = '';
	private title = '';
	private descriptionMarkdown = '';
	private difficulty = 0;
	private categories = '';
	private idCode = '';
	private pathAndFileName = '';

	constructor(importExercise: IImportExercise) {
		this.author = importExercise.author;	
		this.title = importExercise.title;	
		this.descriptionMarkdown = importExercise.descriptionMarkdown;
		this.difficulty = importExercise.difficulty;
		this.categories = importExercise.categories;

		this.idCode = tools.convertTextNotationToKebabcase(this.title);
		this.pathAndFileName = `src/exercises/${this.idCode}.txt`; 
	}

	private getContent() {
		return `author::${this.author}
whenCreated::${tools.convertDateToDpodIso(new Date())}
title::${this.title}
descriptionMarkdown::[[
${this.descriptionMarkdown}
]] 
difficulty::${this.difficulty} // 1=easy, 5=difficult
categories::${this.categories} // comma-separated id-codes`;
	}	

	public createFile() {
		tools.createFile(this.pathAndFileName, this.getContent());
	}

}