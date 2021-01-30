import * as express from 'express';
import { ObjectId } from 'mongodb';
import * as userService from '../../modules/users/services/users.service';
import { UserDbModel } from '../../modules/users/models/user.db.model';

async function getUser(req: express.Request, res: express.Response): Promise<void> {
	const user: UserDbModel = await userService.getUser({ id: new ObjectId() });
	res.status(200);
	res.json(user);
}

async function createUser(req: express.Request, res: express.Response): Promise<void> {
	const user: UserDbModel = await userService.createUser({ user: { name: 'James' } });
	res.status(200);
	res.json(user);
}

export { getUser, createUser };
