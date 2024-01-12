import { IAppData } from "../interfaces";
import { getMenu } from "../router";

export function Header(
	currentPage:
		| {
				title: string;
				type: string;
				html: string;
				pathAndFileName?: undefined;
		  }
		| { title: string; type: string; pathAndFileName: string; html: any },
	appData: IAppData,
	pageIdCode: string
) {
	return /*html*/ `
        <header class="p-6 shadow-lg bg-black rounded-sm ">
            <div class="flex flex-col md:flex-row gap-4 justify-between">
                <h1 class="text-xl md:text-2xl cursor-pointer select-none ">
				<a href="/"><i class="fa fa-home hover:text-indigo-400 transition-all bg-white text-black rounded-full p-2  " aria-hidden="true"></i></a>  
				<span @click="menuOpen = !menuOpen" class="hover:text-indigo-400 transition-all p-4  ">${currentPage.title}</span> ${
		currentPage.type === "solution"
			? /*html*/ `<span class="text-base "> <a href="${appData.githubUrl}/tree/dev/${currentPage.pathAndFileName}" target="_blank" class="underline italic text-white p-2 rounded-sm bg-neutral-800  hover:text-indigo-400 transition-all">view code</a></span>`
			: ""
	}</h1>
                <nav class="p-1 mt-4 md:mt-0">
                    ${
						pageIdCode !== "about"
							? /*html*/ `
							<a href="/about" class="shadow-xl bg-neutral-900 rounded-sm p-2 sm:p-4 hover:bg-white hover:text-black transition-all ease-in-out  duration-300">About</a>`
							: ``
					}
                </nav>
            </div>
            ${getMenu(appData)}
        </header>
    `;
}
