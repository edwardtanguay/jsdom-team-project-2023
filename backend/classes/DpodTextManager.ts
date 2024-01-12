import * as tools from '../tools.js';
import { IDataType } from '../interfaces.js';

export class DpodTextManager {

	private content = '';
	private lines: string[] = [];
	private consolidatedLines: string[] = [];
	private dataTypes:IDataType[] = [];

	constructor(content: string) {
		this.content = content;
		this.lines = tools.convertStringBlockToLines(this.content);
		this.dataTypes = [];
		this.consolidatedLines = [];

		this.consolidateLines();
		this.createDataTypes();
		this.parseMarkdownField();

	}

	debug() {
		console.log('LINES', this.lines);
		console.log('CONSOLIDATED_LINES', this.consolidateLines);
		console.log('DATATYPES', this.dataTypes);
		throw new Error('finished debugging');
	}

	parseMarkdownField() {
		const descriptionMarkdown = this.dataTypes.find(m => m.idCode === 'descriptionMarkdown').value;
		const html = tools.parseMarkdown(String(descriptionMarkdown));
		this.dataTypes.push({
			idCode: 'descriptionHtml',
			title: 'Description HTML',
			value: html
		});
	}

	consolidateLines() {
		let multilineFieldIdCode = '';
		let multilineFieldValueParts = [];
		let processingMultilineField = false;
		for (const line of this.lines) {
			if (line.endsWith('[[')) {
				processingMultilineField = true;
				multilineFieldIdCode = tools.getTextUpToMarker(line, '::');
				continue;
			}
			if (line.endsWith(']]')) {
				const consolidatedLine = `${multilineFieldIdCode}::${multilineFieldValueParts.join('\n')}`;
				this.consolidatedLines.push(consolidatedLine);
				multilineFieldIdCode = '';
				multilineFieldValueParts = [];
				processingMultilineField = false;
				continue;
			}
			if (processingMultilineField) {
				multilineFieldValueParts.push(line);
			} else {
				this.consolidatedLines.push(line);
			}
		}
	}

	createDataTypes() {
		this.dataTypes = [];
		for (const consolidatedLine of this.consolidatedLines) {
			const parts = tools.breakIntoParts(consolidatedLine, '::');
			const idCode = parts[0];
			const title = tools.capitalizeFirstLetter(idCode);
			const value = tools.removeEndComment(parts[1]);
			this.dataTypes.push(
				{ idCode, title, value: idCode === 'difficulty' ? Number(value) : value  }
			);
		}
	}

	getNumberOfLines() {
		return this.lines.length;
	}

	getDataTypes() {
		return this.dataTypes;
	}

	getSimpleObject() {
		const obj = {};
		for (const dataType of this.dataTypes) {
			obj[dataType.idCode] = dataType.value;
		}
		return obj;
	}
}