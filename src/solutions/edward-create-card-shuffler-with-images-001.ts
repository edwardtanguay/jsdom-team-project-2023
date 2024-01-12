import { IAppData, ICard } from "../interfaces";

const EdwardCreateCardShufflerWithImages001 = (appData: IAppData) => {

	const shuffleDeck = (deck:ICard[]) => {
		return deck.sort(() => Math.random() - 0.5);
	};

	const shuffledCards = shuffleDeck([...appData.cards]);


	return /*html*/`
	<div class="flex gap-2">
		${shuffledCards.slice(0, 5).map(card => {
		return `<img src="${card.pathAndFileName}" class="w-[100px]"/>`;
	}).join('')}
	</div>	
`;
}
export default EdwardCreateCardShufflerWithImages001;