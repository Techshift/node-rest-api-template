import { ObjectId } from 'mongodb';
import { UserDbModel } from '../models/user.db.model';

interface GetUserOptions {
	id: ObjectId;
}
function getUser({ id }: GetUserOptions): Promise<UserDbModel> {
	return Promise.resolve({
		_id: id,
		name: 'James'
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

export { getUser, createUser };
