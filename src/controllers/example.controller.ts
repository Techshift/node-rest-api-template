import * as express from 'express';

function doAThing(req: express.Request, res: express.Response): void {
	res.status(200);
	res.json({});
}

export { doAThing };
