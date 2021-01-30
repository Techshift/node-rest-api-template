import { ObjectId } from 'mongodb';

interface UserDbModel {
	_id: ObjectId;
	name: string;
}

export { UserDbModel };
