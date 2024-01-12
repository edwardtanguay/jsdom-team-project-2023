import express from 'express';
import cors from 'cors';
import { getAppData } from './appModel.js';
import { SolutionManager } from './classes/SolutionManager.js';

const app = express();
app.use(cors());
app.use(express.json());

const { appTitle } = getAppData();
const port = 4224;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send(`
	<h1>${appTitle} API</h1>	
	<ul>
		<li><a href="/app-data">/app-data</a></li>
	</ul>
	`);
});

app.post('/add-exercise', (req: express.Request, res: express.Response) => {
	const exerciseIdCode = req.body.exerciseIdCode;
	const firstName = req.body.firstName;
	const solutionManager = new SolutionManager(exerciseIdCode, firstName);
	solutionManager.createFile();
});

app.get('/app-data', (req, res) => {
	const appData = getAppData();
	res.json(appData);
});

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}...`);
})