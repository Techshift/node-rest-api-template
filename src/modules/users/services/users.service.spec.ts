import { ObjectId } from 'mongodb';
import * as usersService from './users.service';
import { UserDbModel } from '../models/user.db.model';

describe('getUser', () => {
	it('Should return the user', async () => {
		// -- Arrange -- //
		const userId = new ObjectId();
		const user: UserDbModel = {
			_id: userId,
			name: 'James'
		};

		// -- Act -- //
		const result = await usersService.getUser({ id: userId });

		// -- Assert -- //
		expect(result).toEqual(user);
	});
});

describe('getUsers', () => {
	it('Should return the users', async () => {
		// -- Arrange -- //

		// -- Act -- //
		const result = await usersService.getUsers({});

		// -- Assert -- //
		expect(result).toEqual({
			items: [
				{
					_id: expect.anything(),
					name: expect.any(String)
				}
			],
			skip: 0,
			limit: 10,
			total: 1,
			hasMore: false
		});
	});
});

describe('createUser', () => {
	it('Should return the newly created user', async () => {
		// -- Arrange -- //
		const userName = 'James';

		// -- Act -- //
		const result = await usersService.createUser({ user: { name: userName } });

		// -- Assert -- //
		expect(result).toEqual({
			_id: expect.anything(),
			name: userName
		});
	});
});
