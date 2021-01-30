import * as express from 'express';
import { getUser, createUser } from '../controllers/users/users.controller';

function usersRoute(app: express.Application): void {
	app.get('/users', (req: express.Request, res: express.Response) => {
		getUser(req, res);
	});

	app.post('/users', (req: express.Request, res: express.Response) => {
		createUser(req, res);
	});
}

export { usersRoute };
