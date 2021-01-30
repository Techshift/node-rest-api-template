import { ObjectId } from 'mongodb';
import * as express from 'express';
import * as usersController from './users.controller';
import * as usersService from '../../modules/users/services/users.service';
import { UserDbModel } from '../../modules/users/models/user.db.model';

describe('getUser', () => {
	it('Should return the user', async () => {
		// -- Arrange -- //
		const userId = new ObjectId();
		const user: UserDbModel = {
			_id: userId,
			name: 'James'
		};

		jest.spyOn(usersService, 'getUser').mockResolvedValue(user);

		const req = ({} as unknown) as express.Request;
		const res = ({
			status: jest.fn(),
			json: jest.fn()
		} as unknown) as express.Response;

		// -- Act -- //
		await usersController.getUser(req, res);

		// -- Assert -- //
		expect(res.json).toHaveBeenCalledWith(user);
	});
});

describe('createUser', () => {
	it('Should return the newly created user', async () => {
		// -- Arrange -- //
		const userId = new ObjectId();
		const user: UserDbModel = {
			_id: userId,
			name: 'James'
		};

		jest.spyOn(usersService, 'getUser').mockResolvedValue(user);

		const req = ({} as unknown) as express.Request;
		const res = ({
			status: jest.fn(),
			json: jest.fn()
		} as unknown) as express.Response;

		// -- Act -- //
		await usersController.getUser(req, res);

		// -- Assert -- //
		expect(res.json).toHaveBeenCalledWith(user);
	});
});
