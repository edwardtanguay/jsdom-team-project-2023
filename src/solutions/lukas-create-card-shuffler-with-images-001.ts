import { IAppData, ICard } from "../interfaces";

const LukasCreateCardShufflerWithImages001 = (appData: IAppData) => {
	// CODE HERE
	const shuffleDeck = (deck: ICard[]) => {
		/* Fisher-Yates shuffle algorithm */
		for (let i = deck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
		}
		return deck;
	};
	const shuffledCards = shuffleDeck([...appData.cards]);

	return /*html*/ `
	<div class="solution">
		<h2 class="mb-3">this is a <span class="font-bold">Fisher-Yates shuffle algorithm</span> made partially by ChatGPT.</h2>
		<div class="flex gap-4">
			${shuffledCards
				.slice(0, 5)
				.map((card) => {
					return `<img src="${card.pathAndFileName}" class="w-[100px]"/>`;
				})
				.join("")}
		</div>
	</div>
`;
};
export default LukasCreateCardShufflerWithImages001;
