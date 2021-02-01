import { ObjectId } from 'mongodb';
import * as express from 'express';
import * as usersController from './users.controller';
import * as usersService from '../../modules/users/services/users.service';
import { UserDbModel } from '../../modules/users/models/user.db.model';
import { UserResponseModel } from '../../api/users/response/user-response.model';
import { ArrayDbModel } from '../../models/array.model';
import { UsersResponseModel } from '../../api/users/response/users-response.model';

describe('getUsers', () => {
	it('Should return the users', async () => {
		// -- Arrange -- //
		const user1Id = new ObjectId();
		const user1: UserDbModel = {
			_id: user1Id,
			name: 'James'
		};

		const user2Id = new ObjectId();
		const user2: UserDbModel = {
			_id: user2Id,
			name: 'Bob'
		};
		const users: ArrayDbModel<UserDbModel> = {
			items: [user1, user2],
			skip: 0,
			limit: 10,
			total: 2,
			hasMore: false
		};

		jest.spyOn(usersService, 'getUsers').mockResolvedValue(users);

		const req = ({
			query: {}
		} as unknown) as express.Request;
		const res = ({
			status: jest.fn(),
			json: jest.fn()
		} as unknown) as express.Response;

		// -- Act -- //
		await usersController.getUsers(req, res);

		// -- Assert -- //
		const response: UsersResponseModel = {
			data: {
				users: {
					items: [
						{
							id: user1Id.toHexString(),
							name: 'James',
							createdAt: user1Id.generationTime
						},
						{
							id: user2Id.toHexString(),
							name: 'Bob',
							createdAt: user2Id.generationTime
						}
					],
					skip: 0,
					limit: 10,
					total: 2,
					hasMore: false
				}
			}
		};
		expect(res.json).toHaveBeenCalledWith(response);
	});
});

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
		const response: UserResponseModel = {
			data: {
				user: {
					id: userId.toHexString(),
					name: 'James',
					createdAt: userId.generationTime
				}
			}
		};
		expect(res.json).toHaveBeenCalledWith(response);
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

		jest.spyOn(usersService, 'createUser').mockResolvedValue(user);

		const req = ({
			body: {
				name: 'James'
			}
		} as unknown) as express.Request;
		const res = ({
			status: jest.fn(),
			json: jest.fn()
		} as unknown) as express.Response;

		// -- Act -- //
		await usersController.createUser(req, res);

		// -- Assert -- //
		const response: UserResponseModel = {
			data: {
				user: {
					id: userId.toHexString(),
					name: 'James',
					createdAt: userId.generationTime
				}
			}
		};
		expect(res.json).toHaveBeenCalledWith(response);
	});
});
