import skillObjs from '../data/other/skills.json';
import * as tools from '../tools';

const EdwardCreateMovableGraphicsWithClasses001 = () => {

	return /*html*/`
	<div class="flex gap-1">
		<div>
			<canvas class="gameArea" width="570" height="400" style="background-color: #fff; border:1px solid #666;">
		</div>
		<div class="absolute">
			<button class="btnLeft relative w-[50px] left-[590px] top-[30px] bg-slate-400 p-1 mt-2 rounded">left</button>
			<button class="btnRight relative w-[50px] left-[643px] top-[30px] bg-slate-400 p-1 mt-2 rounded">right</button>
			<button class="btnUp relative w-[50px] left-[535px] top-[-5px] bg-slate-400 p-1 mt-2 rounded">up</button>
			<button class="btnDown relative w-[50px] left-[480px] top-[65px] bg-slate-400 p-1 mt-2 rounded">down</button>
		</div>

		<ul class="skillsList mt-[130px] ml-[30px]">
		</ul>
	</div>
`;
}

interface ISkill {
	idCode: string;
	name: string;
	url: string;
	description: string;
}

class Game {

	private skillObjs: ISkill[] = [];
	private skills: Skill[] = [];
	private player: Player | null = null;
	private doc: Document | undefined = undefined;
	private ctx: CanvasRenderingContext2D | undefined | null = null;
	private gameAreaElem: HTMLCanvasElement | undefined | null = undefined;
	private skillsListElem: HTMLUListElement | undefined | null = undefined;

	constructor(doc: Document, skillObjs: ISkill[]) {
		this.doc = doc;
		this.skillObjs = skillObjs;

		this.skillsListElem = doc.querySelector<HTMLUListElement>('.skillsList')
	}

	thereAreNoCollisions(x: number, y: number) {
		if (this.skills.length == 0) return false;
		return !this.skills.every(m => Math.abs(m.x - x) > 15 && Math.abs(m.y - y) > 15)
	}

	public loadGame() {
		this.createGameArea();
		this.loadSkills();
		this.loadPlayer();
		this.attachEvents();
	}

	private attachEvents() {
		this.attachArrowButtonEvents();
		this.attachArrowKeyEvents();
	}

	private attachArrowKeyEvents() {
		const bodyElem = document.querySelector<HTMLDivElement>('body');
		if (bodyElem) {
			bodyElem.addEventListener('keydown', (event) => {
				switch (event.key) {
					case 'ArrowLeft':
						this.movePlayer('left');
						break;
					case 'ArrowRight':
						this.movePlayer('right');
						break;
					case 'ArrowUp':
						this.movePlayer('up');
						break;
					case 'ArrowDown':
						this.movePlayer('down');
						break;
				}
			});
		}
	}

	private attachArrowButtonEvents() {
		const btnLeftElem = document.querySelector<HTMLDivElement>('.btnLeft');
		const btnRightElem = document.querySelector<HTMLDivElement>('.btnRight');
		const btnUpElem = document.querySelector<HTMLDivElement>('.btnUp');
		const btnDownElem = document.querySelector<HTMLDivElement>('.btnDown');
		if (btnLeftElem && btnRightElem && btnUpElem && btnDownElem) {
			btnLeftElem.addEventListener('click', () => {
				this.movePlayer('left');
			});
			btnRightElem.addEventListener('click', () => {
				this.movePlayer('right');
			});
			btnUpElem.addEventListener('click', () => {
				this.movePlayer('up');
			});
			btnDownElem.addEventListener('click', () => {
				this.movePlayer('down');
			});
		}
	}

	private movePlayer(direction: string) {
		if (this.player) {
			switch (direction) {
				case 'left':
					this.player.moveLeft();
					break;
				case 'right':
					this.player.moveRight();
					break;
				case 'up':
					this.player.moveUp();
					break;
				case 'down':
					this.player.moveDown();
					break;
			}
			this.checkPlayerSkillCollision();
		}
	}

	private checkPlayerSkillCollision() {
		for (const skill of this.skills) {
			if (this.player) {
				if (skill.checkCollision(this.player)) {
					skill.setColor('#ccc');
					this.addSkillToList(skill);
				}
			}
		}
	}

	private addSkillToList(skill: Skill) {
		const listItem = <HTMLLIElement>(document.createElement('li'));
		listItem.innerHTML = `<a href="${skill.getUrl()}" target="_blank" class="font-bold underline">${skill.getName()}</a> - ${skill.getDescription()}`;
		this.skillsListElem?.appendChild(listItem);
	}

	private loadSkills() {
		const choosenSkillObjs = tools.getRandomItems(this.skillObjs, 10);
		for (let i = 0; i < choosenSkillObjs.length; i++) {
			let x = 10;
			let y = 10;
			const choosenSkillObj = choosenSkillObjs[i];
			do {
				x = Math.floor(Math.random() * 370) + 10;
				y = Math.floor(Math.random() * 340) + 24;
			} while (this.thereAreNoCollisions(x, y));
			if (this.ctx) {
				this.skills.push(new Skill(document, x, y, choosenSkillObj, this.ctx));
			}
		}
	}

	private loadPlayer() {
		let x = 10;
		let y = 10;
		do {
			x = Math.floor(Math.random() * 370) + 10;
			y = Math.floor(Math.random() * 340) + 24;
		} while (this.thereAreNoCollisions(x, y));
		if (this.doc && this.ctx) {
			this.player = new Player(this.doc, x, y, this.ctx)
		}
	}

	private createGameArea() {
		this.gameAreaElem = this.doc?.querySelector<HTMLCanvasElement>('.gameArea');
		this.ctx = this.gameAreaElem?.getContext('2d');
	}
	public clearGameArea() {
		if (this.ctx) {
			this.ctx.clearRect(0, 0, 600, 400);
		}
	}

	private redrawGameArea = () => {
		this.player?.draw();
		this.skills.forEach(m => m.draw());
	}

	public startGame = () => {
		setInterval(() => {
			this.clearGameArea();
			this.redrawGameArea();
		}, 10);
	}
}

class GameObject {
	public x: number = 0;
	public y: number = 0;
	private doc: Document | undefined = undefined;
	protected ctx: CanvasRenderingContext2D | undefined | null = null;
	protected name: string = '';
	protected color: string = '';
	private debugging: boolean = false;

	constructor(doc: Document, x: number, y: number, name: string, ctx: CanvasRenderingContext2D) {
		this.doc = doc;
		this.x = x;
		this.y = y;
		this.name = name;
		this.ctx = ctx;

		this.color = 'black';

		this.assignElements();
		this.createOnGameArea();
	}

	private assignElements() {
	}

	private createOnGameArea() {
		if (this.ctx) {
			this.ctx.font = "1rem Courier";
			this.draw();
		}
	}

	public draw() {
		if (this.ctx) {
			this.ctx.fillStyle = this.color;
			this.ctx.fillText(this.name, this.x, this.y);
			if (this.debugging) {
				this.debugDrawLines();
			}
		}
	}

	protected getFrameCoordinates() {
		const paddingTop = -14;
		const paddingBottom = 4;
		const paddingLeft = -3;
		const paddingRight = 2;
		const letterWidth = 10;
		return {
			xleft: this.x + paddingLeft,
			xright: this.x + (this.name.length * letterWidth) + paddingRight,
			ytop: this.y + paddingTop,
			ybottom: this.y + paddingBottom
		}
	}

	public debugDrawLines() {
		if (this.ctx) {
			const coord = this.getFrameCoordinates();
			this.ctx.moveTo(coord.xleft, coord.ybottom);
			this.ctx.strokeStyle = 'red';
			this.ctx.lineTo(coord.xright, coord.ybottom);
			this.ctx.lineTo(coord.xright, coord.ytop);
			this.ctx.lineTo(coord.xleft, coord.ytop);
			this.ctx.lineTo(coord.xleft, coord.ybottom);
			this.ctx.stroke();
		}
	}
}

class Skill extends GameObject {

	private skillObj: ISkill | null = null;
	private isCaptured: boolean = false;

	constructor(doc: Document, x: number, y: number, skillObj: ISkill, ctx: CanvasRenderingContext2D) {
		super(doc, x, y, skillObj.name, ctx);
		this.skillObj = skillObj;
	}

	public getName() {
		if (this.skillObj) {
			return this.skillObj.name;
		} else {
			return '';
		}
	}

	public getUrl() {
		if (this.skillObj) {
			return this.skillObj.url;
		} else {
			return '';
		}
	}

	public getDescription() {
		if (this.skillObj) {
			return this.skillObj.description;
		} else {
			return '';
		}
	}

	public checkCollision(player: Player) {
		if (this.isCaptured) return false;
		const coord = this.getFrameCoordinates();
		if (player.x > coord.xleft && player.x < coord.xright && player.y > coord.ytop && player.y < coord.ybottom) {
			this.isCaptured = true;
			return true;
		} else {
			return false;
		}
	}

	public setColor(color: string) {
		this.color = color;
	}
}

class Player extends GameObject {
	private moveSpace = 10;

	constructor(doc: Document, x: number, y: number, ctx: CanvasRenderingContext2D) {
		super(doc, x, y, 'X', ctx);
		this.color = 'red';
	}

	moveLeft() {
		this.x = this.x - this.moveSpace;
	}

	moveRight() {
		this.x = this.x + this.moveSpace;
	}

	moveUp() {
		this.y = this.y - this.moveSpace;
	}

	moveDown() {
		this.y = this.y + this.moveSpace;
	}

}

export const attachEdwardGameEvents = () => {
	const game = new Game(document, skillObjs);
	game.loadGame();
	game.startGame();
}

export default EdwardCreateMovableGraphicsWithClasses001;