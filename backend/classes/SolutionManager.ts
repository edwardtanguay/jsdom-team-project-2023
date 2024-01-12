import * as tools from '../tools.js';

export class SolutionManager {

	private firstName = '';
	private exerciseIdCode = '';
	private idCode = '';
	private pathAndFileName = '';
	private componentName = '';

	constructor(exerciseIdCode: string, firstName: string) {
		this.exerciseIdCode = exerciseIdCode;
		this.firstName = firstName.toLowerCase();

		this.idCode = `${this.firstName}-${this.exerciseIdCode}-001`;
		this.pathAndFileName = `src/solutions/${this.idCode}.ts`;
		this.componentName = tools.convertTextNotationToCamelcase(this.idCode, '-');
	}

	private getContent() {
		return `const ${this.componentName} = () => {

	// ANY CODE THAT USES querySelector() or getElementById() HERE:
	setTimeout(() => {

	});

	// OTHER CODE HERE:
	
	
	return /*html*/\`
	<div class="solution">
		Create your solution in the file: <b>${this.pathAndFileName}</b>
	</div>
\`;
}
export default ${this.componentName};
	`;
	}

	public createFile() {
		tools.createFile(this.pathAndFileName, this.getContent());
	}
}