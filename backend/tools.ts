import fs from 'fs';
import * as tools from './tools.js';
import { marked } from 'marked';

/**
 * Creates a file with content
 * 
 * tools.createFile('../logs/log.txt', 'added item');
 * 
 * (file is created)
 */
export const createFile = (pathAndFileName: string, content: string) => {
	fs.writeFileSync(pathAndFileName, content.trim());
};

export const getCreationDateOfFile = (pathAndFileName: string) : string => {
	const stats = fs.statSync(pathAndFileName);
	return tools.convertDateToDpodIso(stats.birthtime);
}

export const convertDateToDpodIso = (date: Date) => {
	const standardIso = date.toISOString();
	const dpodIso = standardIso.replace(/([^T]+)T([^\.]+).*/g, '$1 $2'); 
	return dpodIso;
}

export const readContentFromFile = (pathAndFileName: string) => {
	return fs.readFileSync(pathAndFileName, { encoding: 'utf8', flag: 'r' });
};

export const readLinesFromFile = (pathAndFileName: string) => {
	const content = tools.readContentFromFile(pathAndFileName);
	const lines = tools.convertStringBlockToLines(content);
	return lines;
};

/**
 * Adds a line to a specific point in a file
 * 
 * tools.addLineInFile(`./src/main.ts`, '@@FIRSTLINE', `import { ${idCodeSnakeCase} } from './examples/${idCodeSnakeCase}';`);
 * tools.addLineInFile(`./src/Router.ts`, 'switch (', `case '${pageName.toLowerCase()}':\nreturn Page${pageName}();`);
 * 
 * (line is added)
 */
export const addLineInFile = (pathAndFileName: string, marker: string, additionalLine: string) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines = tools.convertStringBlockToLines(content);
	let newLines = [];
	let lineNumber = 1;
	for (const line of lines) {
		if (lineNumber === 1 && marker === '@@FIRSTLINE') {
			newLines.push(additionalLine);
		}
		const newLine = line;
		newLines.push(newLine);
		if (newLine.includes(marker)) {
			newLines.push(additionalLine);
		}
		lineNumber++;
	}
	const newContent = tools.convertLinesToStringBlock(newLines);
	tools.createFile(pathAndFileName, newContent);
};

/**
 * Converts an array of strings to a string with newline characters
 * 
 * const content = tools.convertLinesToStringBlock(lines);
 * 
 * "line1\nline2\nline3"
 */
export const convertLinesToStringBlock = (lines: string[]) => {
	let r = '';
	let index = 0;
	for (const line of lines) {
		r += line;
		if (index != lines.length - 1) {
			r += '\n';
		}
		index++;
	}
	return r;
};


/**
 * Converts a string with newline characters to an array of strings, one per line 
 * 
 * const lines: string[] = tools.convertStringBlockToLines(content);
 * 
 * ['line1', 'line2', 'line3']
 */
export const convertStringBlockToLines = (stringBlock: string, trimLines: boolean = true) => {
	let roughLines = [];
	const TABMARKER = '%%TAB%%';

	stringBlock = tools.replaceAll(stringBlock, '\t', TABMARKER);

	if (tools.isEmpty(stringBlock)) {
		return [];
	}
	roughLines = stringBlock.split('\n');
	if (trimLines) {
		roughLines = tools.trimAllLinesInLinesArray(roughLines);
	}
	roughLines = tools.removeEmptyLinesFromLinesAtBeginningAndEnd(roughLines);

	roughLines = roughLines.map(m => tools.replaceAll(m, TABMARKER, '\t'));
	return roughLines;
};

/**
 * Trims every string in a string array
 * 
 * roughLines = ['line1	', 'line2'];
 * 
 * roughLines = tools.trimAllLinesInLinesArray(roughLines);
 * 
 * ['line1','line2']
 */
export const trimAllLinesInLinesArray = (lines: string[]) => {
	const newLines = [];
	lines.forEach(function (line) {
		let newLine = line.trim();
		newLines.push(newLine);
	});
	return newLines;
};

/**
 * Removes blank strings from the beginning and end of a string of arrays
 * 
 * roughLines = ['', 'line1', 'line2', ''];
 * 
 * roughLines = tools.removeEmptyLinesFromLinesAtBeginningAndEnd(roughLines);
 * 
 * ['line1','line2']
 */
export const removeEmptyLinesFromLinesAtBeginningAndEnd = (lines: string[]) => {
	lines = tools.trimAllLinesInLinesArray(lines);
	lines = tools.removeBlankLinesFromBeginning(lines);
	lines = lines.reverse();
	lines = tools.removeBlankLinesFromBeginning(lines);
	lines = lines.reverse();
	return lines;
};

/**
 * Removes blank strings from the beginning of a string of arrays
 * 
 * roughLines = ['', 'line1', 'line2'];
 * 
 * roughLines = tools.removeBlankLinesFromBeginning(roughLines);
 * 
 * ['line1','line2']
 */
export const removeBlankLinesFromBeginning = (lines: string[]) => {
	const newLines = [];
	let trimmingBlanks = true;
	lines.forEach(function (line) {
		let newLine = line;
		if (trimmingBlanks && line == "") {
			//skip it since it is a preceding blank item
		} else {
			newLines.push(newLine);
			trimmingBlanks = false;
		}
	});
	return newLines;
};

/**
 * Check if a string is empty, undefined, null, etc.
 * 
 * if(tools.empty(text)) {
 * 
 * true
 */
export const isEmpty = (line: string) => {
	if (line === undefined || line === null) {
		return true;
	} else {
		line = line.toString();
		if (line.trim() == '') {
			return true;
		} else {
			return false;
		}
	}
};

/**
 * Inserts a text into another text at the point where a certain marker is.
 * 
 * const newLine = tools.insertStringAfterMarkerInString(line, lineMarker, textToInsert);
 * 
 * newLine contains new text 
 */
export const insertStringAfterMarkerInString = (line:string, marker:string, textToInsert:string) => {
	const parts = line.split(marker);
	const firstPart = parts[0];
	const secondPart = parts[1];
	return firstPart + textToInsert + marker + secondPart;
};

/**
 * Changes text in a line at the point before a unique marker.
 * 
 * tools.changeLineInFile(`./src/Router.ts`, 'const pageNames =', ']', ` ,'${pageName}'`);
 * 
 * line in file is changed
 */
export const changeLineInFile = (pathAndFileName:string, marker:string, lineMarker:string, textToInsert:string) => {
	const content = fs.readFileSync(pathAndFileName, { encoding: 'utf8' });
	const lines = tools.convertStringBlockToLines(content);
	let newLines = [];
	for (const line of lines) {
		let newLine = line;
		if (newLine.includes(marker)) {
			newLine = tools.insertStringAfterMarkerInString(line, lineMarker, textToInsert);
			newLines.push(newLine);
		} else {
			newLines.push(line);
		}
	}
	const newContent = tools.convertLinesToStringBlock(newLines);
	tools.createFile(pathAndFileName, newContent);
};

/**
 * Changes text notation to camelcase
 * 
 * tools.convertTitleNotationToCamelcase('First report of five');
 * 
 * "FirstReportOfFive"
 */
export const convertTextNotationToCamelcase = (text:string, separator = ' ') => {
	const words = text.split(separator);

	const capitalizedWords = words.map(word => {
		if (word.length > 0) {
			return word[0].toUpperCase() + word.slice(1);
		} else {
			return "";
		}
	});

	console.log(capitalizedWords);
	const capitalizedText = capitalizedWords.join(" ").replaceAll(' ', '').replaceAll(':', '').replaceAll('>', '').replaceAll('<', '').replaceAll('=', '').replaceAll('!', '');

	return capitalizedText;
};

export const convertTextNotationToKebabcase = (text:string) => {
	let r = '';
	r = text;
	r = r.replaceAll(' ', '-').toLowerCase();
	r = r.replaceAll(':', '').toLowerCase();
	return r;
};

export const getTextUpToMarker = (text:string, marker:string) => {
	const parts = tools.breakIntoParts(text, marker);
	return parts.length > 0 ? parts[0] : '';
};

// split with trim
export const breakIntoParts = (text:string, marker:string) => {
	return text.split(marker).map(m => m.trim());
};

export const removeEndComment = (text:string) => {
	const parts = tools.breakIntoParts(text, ' // ');
	if (parts.length > 1) {
		return parts[0];
	} else {
		return text;
	}
};

export const capitalizeFirstLetter = (text:string) => {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};


export const parseMarkdown = (markdownText:string, options = { suppressParagraphMarks: false, suppressOrderedListElements: false }) => {
	let r = markdownText;

	r = marked.parse(r);
	if (options.suppressParagraphMarks) {
		r = tools.chopLeft(r, '<p>');
		r = tools.chopRight(r, '</p>');
	}

	// make links open up new browser window
	r = tools.replaceAll(r, 'href', 'target="_blank" href');

	// don't hyperlink github links
	r = tools.replaceAll(r, '<a href="mailto:git@github.com">git@github.com</a>', 'git@github.com');

	// was getting </p> a the end of all output that didn't have a \n
	if (!r.startsWith('<p>') && r.endsWith('</p>\n')) {
		r = tools.chopRight(r, '</p>\n');
	}

	return r;
};


export const chopRight = (main:string, textToChop:string) => {
	if (main.endsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(0, mainLen - (len));
		}
	}
	return main;
};

export const chopLeft = (main:string, textToChop:string) => {
	if (main.startsWith(textToChop)) {
		const len = textToChop.length;
		const mainLen = main.length;
		if (len <= mainLen) {
			return main.substring(len, mainLen);
		}
	}
	return main;
};

export const replaceAll = (text:string, search:string, replace:string) => {
	if (text === undefined) {
		return '';
	} else {
		return text.split(search).join(replace);
	}
};


/**
 * Get array of files from a directory, non-recursive.
 * 
 * const files = qfil.getDirectoryPathAndFileNames('public/images');
 * 
 * [
 * 'public/images/field.jpg',
 * 'public/images/forest.jpg',
 * 'public/images/sunset.jpg'
]
 */
export const getDirectoryPathAndFileNames = (path:string) => {
	let result = [];
	let fileNamesInPath = fs.readdirSync(path);
	fileNamesInPath.forEach((fileName) => {
		let filePath = path + '/' + fileName;
		if (!fs.statSync(filePath).isDirectory()) {
			let filePath = path + '/' + fileName;
			result.push(filePath);
		}
	});
	return result;
};