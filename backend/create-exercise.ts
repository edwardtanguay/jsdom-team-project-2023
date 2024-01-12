import { ExerciseManager } from "./classes/ExerciseManager.js";

const importExercise = {
	author: 'edward',
	title: 'Fetch jobs and skills data and display the top ten skills to learn',
	descriptionMarkdown: '- nnn',
	difficulty: 3,
	categories: 'axios, querySelector, addEventListener, map',
	solutionAuthors: []
}

const exerciseManager = new ExerciseManager(importExercise);
exerciseManager.createFile();