import * as express from 'express';
import { ObjectId } from 'mongodb';
import * as userService from '../modules/users/services/user.service';
import { UserDbModel } from '../modules/users/models/user.db.model';

function getUser(req: express.Request, res: express.Response): void {
	userService.getUser({ id: new ObjectId() }).then((user: UserDbModel) => {
		res.status(200);
		res.json(user);
	});
}

function createUser(req: express.Request, res: express.Response): void {
	userService.createUser({ user: { name: 'James' } }).then((user: UserDbModel) => {
		res.status(200);
		res.json(user);
	});
}

export { getUser, createUser };
