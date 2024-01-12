import { getCurrentPage, getMenu } from './router'
import { IAppData } from './interfaces';
import './style.scss'
import { getCurrentPageIdCode } from './tools';
import axios from 'axios';
import { attachExerciseEvents } from './pages/Exercise';
import { attachEdwardGameEvents } from './solutions/edward-create-movable-graphics-with-classes-001';
import { Header } from './components/header';
import { attachPageExercisesEvents } from './pages/PageExercises';

const pageIdCode = getCurrentPageIdCode();
const backendUrl = 'http://localhost:4224';

(async () => {

	const response = await axios.get(`${backendUrl}/app-data`);
	const appData: IAppData = response.data;

	const currentPage = await getCurrentPage(appData);

	document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `

	
	${Header(currentPage, appData, pageIdCode)}

	<main class="shadow-xl bg-neutral-800 rounded-sm p-4 mt-4">
		${currentPage.html}
	</main>
`;

	attachExerciseEvents();
	attachEdwardGameEvents();
	attachPageExercisesEvents();



})();
