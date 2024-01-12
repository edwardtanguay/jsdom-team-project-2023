import { Exercise } from "./pages/Exercise";
import { IAppData } from "./interfaces";
import Page404 from "./pages/Page404";
import JavaScriptFunctionPractice from "./pages/PageAbout";
import * as tools from "./tools";
import PageExercises from "./pages/PageExercises";

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = async (appData: IAppData) => {
  switch (currentPageIdCode) {
    case '':
      return {
        title: "Exercises",
        type: 'page',
        html: PageExercises(appData),
      };

    case `about`:
      return {
        title: "About",
        type: 'page',
        html: JavaScriptFunctionPractice(),
      };

    default:
      // if it's an exercise
      const exercise = appData.exercises.find(m => m.idCode === currentPageIdCode);
      if (exercise) {
        return {
          title: exercise.title,
          type: 'exercise',
          html: Exercise(appData, exercise)
        }
      }

      // if it's an solution
      const solution = appData.solutions.find(m => m.idCode === currentPageIdCode);
      if (solution) {
        const solutionComponentPath = '/' + solution.pathAndFileName;
        const solutionComponent = await import(solutionComponentPath /* @vite-ignore */);
        const htmlContent = solutionComponent
          ? solutionComponent.default(appData)
          : "Assignment not found";
        return {
          title: solution.title,
          type: 'solution',
          pathAndFileName: solution.pathAndFileName,
          html: htmlContent
        }
      }

      return { title: "404", type: '404', html: Page404() };
  }
};

export const getMenu = (appData: IAppData) => {
  // TODO: put active back in
  // const getMenuClass = (pageName: string) => {
  //   const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
  //   if (pageIdCode === currentPageIdCode) {
  //     return ` class="active"`;
  //   } else {
  //     return "";
  //   }
  // };

  return /*html*/ `
		<nav class="mt-3 mb-3 " x-show="menuOpen">
		<ul class="flex gap-3 flex-wrap pr-14 ">
			${appData.exercises.map(exercise => {
    return `<li><a class="underline hover:text-indigo-300 transition-all ease-in-out  duration-300" href="${exercise.idCode}">${exercise.title}</a></li>`;
  }).join('')}
		</ul>
		</nav>
	`;
};

export function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  return currentPageIdCode;
}
