import * as tools from './tools';

export const getCurrentUrl = () => {
	return window.location.href;
}

export const getCurrentPageIdCode = () => {
	const url = tools.getCurrentUrl();
	const parts = url.split('/');
	return parts[parts.length - 1];
}

/**
 * REPLACE ALL OCCURANCES IN A STRING:
 *
 * qstr.replaceAll("This is a tost.", "o", "e");
 *
 * "This is a test."
 */
export const replaceAll = (text: string, search: string, replace: string) => {
	return text.split(search).join(replace);
};

export const cleanCharactersToAscii = (text: string) => {
	text = tools.replaceAll(text, 'Ü', 'ue');
	text = tools.replaceAll(text, 'ü', 'ue');
	text = tools.replaceAll(text, 'Ö', 'oe');
	text = tools.replaceAll(text, 'ö', 'oe');
	text = tools.replaceAll(text, 'Ä', 'oe');
	text = tools.replaceAll(text, 'ä', 'oe');
	text = tools.replaceAll(text, 'ß', 'ss');
	text = tools.replaceAll(text, ' ', '');
	text = tools.replaceAll(text, ':', '');
	text = tools.replaceAll(text, '>', '');
	text = tools.replaceAll(text, '<', '');
	text = tools.replaceAll(text, '!', '');
	text = tools.replaceAll(text, '=', '');
	return text;
}

export const getRandomItems = (arr: any[], numberOfItems: number) => {
	const copyArray = [...arr];
	const result = [];

	while (result.length < numberOfItems) {
		const randomIndex = Math.floor(Math.random() * copyArray.length);
		result.push(copyArray[randomIndex]);
		copyArray.splice(randomIndex, 1);
	}

	return result;
}

// returns e.g. "Dec 01"
export const getShortDay = (dpodIso: string) => {
	const date = new Date(dpodIso);
	const options = { month: "short", day: "2-digit" };
	return new Intl.DateTimeFormat("en-US", options as any).format(date);

}

export const shuffle = (arr: any[]) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}