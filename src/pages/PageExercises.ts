import { AreaAlphabetic } from "../areas/AreaAlphabetic";
import { AreaDevelopers } from "../areas/AreaDevelopers";
import { AreaCategories} from "../areas/AreaCategories";
import { AreaLatest } from "../areas/AreaLatest";
import { IAppData } from "../interfaces";

const tabs = [
	{
		idCode: 'latest',
		title: 'Latest'
	},
	{
		idCode: 'developers',
		title: 'Developers'
	},
	{
		idCode: 'categories',
		title: 'Categories'
	},
	{
		idCode: 'alphabetic',
		title: 'Alphabetic'
	}
];

export const attachPageExercisesEvents = () => {
	const tabElems = document.querySelectorAll('.pageHome .menu .tab');
	let tabIndex = 0;
	for (const tabElem of tabElems) {
		const currentTab = tabs[tabIndex];
		tabElem.addEventListener('click', (e) => {
			const tabContentElems = document.getElementsByClassName('tab-content');
			const clickedTabContentClass = '.' + currentTab.idCode;
			const clickedTabContentElem = document.querySelector<HTMLDivElement>(clickedTabContentClass);

			if (tabContentElems && clickedTabContentElem) {
				// hide all pages
				for (let i = 0; i < tabContentElems.length; i++) {
					(tabContentElems[i] as HTMLDivElement).style.display = "none";
				}

				// remove all active tags
				const tablinks = document.getElementsByClassName("tab");
				for (let i = 0; i < tablinks.length; i++) {
					tablinks[i].classList.remove("active");
				}

				// show the current page and add active tag
				clickedTabContentElem.style.display = "block";
				tabElem.classList.add("active");
			}
		})
		tabIndex++;
	}
	const defaultTab = tabElems[0] as HTMLDivElement;
	if (defaultTab) {
		defaultTab.click();
	}
}

const PageHome = (appData: IAppData) => {
	console.log(appData);
	return /*html*/ `
<div class="pageHome">

	<div class="tab-content latest">
		${AreaLatest(appData)}
	</div>

	<div class="tab-content developers">
		${AreaDevelopers(appData)}
	</div>

	<div class="tab-content categories">
		${AreaCategories(appData)}
	</div>

	<div class="tab-content alphabetic">
		${AreaAlphabetic(appData)}
	</div>

	<!-- MENU AREA -->
	<div class="menu">
		${tabs.map(tab => {
		const extraClasses = tab.idCode === 'exercises' ? ' active' : '';
		return `<div class="tab cursor-pointer${extraClasses}">${tab.title}</div>`;
	}).join('')}
	</div>
</div>
`;
};

export default PageHome;