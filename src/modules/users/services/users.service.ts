import { ObjectId } from 'mongodb';
import { UserDbModel } from '../models/user.db.model';
import { ArrayDbModel } from '../../../models/array.model';

interface GetUserOptions {
	id: ObjectId;
}
function getUser({ id }: GetUserOptions): Promise<UserDbModel> {
	return Promise.resolve({
		_id: id,
		name: 'James'
	});
}

interface GetUsersOptions {
	skip?: number;
	limit?: number;
}
function getUsers({ skip, limit }: GetUsersOptions): Promise<ArrayDbModel<UserDbModel>> {
	return Promise.resolve({
		items: [
			{
				_id: new ObjectId(),
				name: 'James'
			}
		],
		skip: skip || 0,
		limit: limit || 10,
		total: 1,
		hasMore: false
	});
}

interface CreateUserOptions {
	user: { name: string };
}
function createUser({ user }: CreateUserOptions): Promise<UserDbModel> {
	return Promise.resolve({
		_id: new ObjectId(),
		name: user.name
	});
}

export { getUser, getUsers, createUser };
