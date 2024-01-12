const JavaScriptFunctionPractice = () => {
	return /*html*/`
	<h2 class="text-2xl mb-4 text-indigo-400 font-bold">JS-DOM Team Project</h2>
	 	<section class="ml-3 shadow-md">
			<ul class="listOfInstructions p-4">
				<li>The purpose of this site is to practice website development skills in a JS-DOM website.</li>
			</ul>
		</section>
	<h2 class="text-2xl mb-4 text-indigo-400 font-bold">Project Links</h2>
	 	<section class="ml-3 shadow-md p-4">
			<div><i class="fa fa-link" aria-hidden="true"></i> <strong>GitHub</strong>: <a class="underline hover:text-indigo-400" target="_blank" href="https://github.com/WD23-D04/042-js-function-practice">CLICK HERE</a></div>
			<div><i class="fa fa-link" aria-hidden="true"></i> <strong>Task board</strong>: <a class="underline  hover:text-indigo-400" target="_blank" href="https://github.com/orgs/WD23-D04/projects/7/views/1?visibleFields=%5B%22Title%22%2C%22Assignees%22%2C%22Status%22%2C%22Labels%22%5D&verticalGroupedBy%5BcolumnId%5D=Status">CLICK HERE</a></div>
		</section>
	<h2 class="text-2xl mb-1 mt-3 text-indigo-400 font-bold">General Infos</h2>
	 	<section class="ml-3">
			<ul class="listOfInstructions">
				<li>You can add a new exercise typing in your terminal e.g. <code>npm run cli</code></li>
				<li>Each exercise has a <b>link to the solution</b> if you just want to learn by viewing the code. But if you want to try to solve the exercise yourself, <b>create a new exercise</b> and solve it in your own way.</li>
				<li>Because this site is a JavaScript framework (Vite JS-DOM), you can <b>make your exercises as complex as you want</b>, e.g. with user interaction, form processing, third-party libraries such as lodash, etc.</li>
				<li>Another good exercise would be if you specified which functions should be used to solve the exercise, in order to practice specific functions.</li>
				<li>You can style your solutions with <b>Sass</b> or <b>Tailwind</b>, see this <a href="https://nerdcave.com/tailwind-cheat-sheet" target="_blank">Tailwind cheet sheat</a></li>
				<li>A popular type of exercise is to practice <b>JavaScript functions</b> by using these <a href="https://github.com/WD23-D04/042-js-function-practice/tree/dev/src/data" target="_blank">Northwind JSON files</a></a> which are realistic, international data that have internal relations, e.g. orders have a customerID and employeeID. Here is a list of the most useful JavaScript functions:
					<ul>
						<li><b>array functions</b>
							<ul>
								<li><i>higher-order functions</i>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">map</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">filter</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" target="_blank">find</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank"> reduce</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"target="_blank">forEach</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">sort</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/everyc"target="_blank">every</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some"target="_blank">some</a></li>
                								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push"target="_blank">push</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"target="_blank">pop</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank">unshift</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank">shift</a></li>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"target="_blank">slice</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"target="_blank">splice</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/with"target="_blank">with</a> </li>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" target="_blank">reverse</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" target="_blank">includes</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">join</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank">indexOf</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" target="_blank">from</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" target="_blank">flat</a></li>
							</ul>
						</li>
						<li><b>object functions</b>
							<ul>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries" target="_blank">entries</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank">keys</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values" target="_blank">values</a></li>
							</ul>
						</li>
						<li><b>string functions</b>
							<ul>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">split</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" target="_blank">startsWith</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith" target="_blank">endsWith</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes" target="_blank">includes</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd" target="_blank">padEnd</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart" target="_blank"> padStart</a></li>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">replace</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll"  target="_blank">replaceAll</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring"  target="_blank"> substring</a></li>
								<li><i>regex</i>: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match" target="_blank">match</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll" target="_blank">matchAll</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search" target="_blank">search</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank">replace</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll" target="_blank">replaceAll</a></li>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase" target="_blank">toLowerCase</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase" target="_blank"> toUpperCase</a></li>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim" target="_blank">trim</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd" target="_blank">trimEnd</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart" target="_blank">trimStart</a></li>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt" target="_blank">charAt</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" target="_blank">indexOf</a></li>
							</ul>
						</li>
						<li><b>math functions</b>
							<ul>
								<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil" target="_blank">ceil</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor" target="_blank">floor</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round"  target="_blank">round</a>,<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max"  target="_blank"> max</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min"  target="_blank">min</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random"  target="_blank">random</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li>Feel free to import other libraries and tools in order to solve practice your web development skills, e.g.
					<ul>	
						<li><a href="https://alpinejs.dev/essentials/installation" target="_blank">alpine.js (installed)</a></li>
						<li><a href="https://day.js.org/docs/en/installation/installation" target="_blank">day.js (installed)</a></li>
						<li><a href="https://lodash.com/" target="_blank">lodash</a></li>
						<li><a href="https://www.chartjs.org/docs/latest/getting-started/installation.html" target="_blank">chart.js</a></li>
					</ul>
				</li>
			</ul>
</section>
`;
}

export default JavaScriptFunctionPractice;