import * as express from 'express';
import { doAThing } from '../controllers/example.controller';

function exampleRoute(app: express.Application): void {
	app.post('/example', (req: express.Request, res: express.Response) => {
		doAThing(req, res);
	});
}

export { exampleRoute };
