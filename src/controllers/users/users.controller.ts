import * as express from 'express';
import { ObjectId } from 'mongodb';
import * as usersService from '../../modules/users/services/users.service';
import { UserDbModel } from '../../modules/users/models/user.db.model';
import { validate } from '../../util/joi/validate';
import { CreateUserModel } from '../../api/users/request/create-user/create-user.model';
import { CreateUserSchema } from '../../api/users/request/create-user/create-user.validate';
import { UserResponseModel } from '../../api/users/response/user-response.model';
import { UsersResponseModel } from '../../api/users/response/users-response.model';
import { PaginationSchema } from '../../api/common/request/pagination/pagination.validate';
import { PaginationModel } from '../../api/common/request/pagination/pagination.model';

async function getUser(req: express.Request, res: express.Response): Promise<void> {
	const user: UserDbModel = await usersService.getUser({ id: new ObjectId() });

	const response: UserResponseModel = {
		data: {
			user: {
				id: user._id.toHexString(),
				name: user.name,
				createdAt: user._id.generationTime
			}
		}
	};

	res.status(200);
	res.json(response);
}

async function getUsers(req: express.Request, res: express.Response): Promise<void> {
	const { value, error } = validate<PaginationModel>(PaginationSchema, req.query);

	if (error) {
		throw new Error(error.message);
	}

	const users = await usersService.getUsers({ skip: value.skip, limit: value.limit });

	const response: UsersResponseModel = {
		data: {
			users: {
				items: users.items.map((user) => {
					return {
						id: user._id.toHexString(),
						name: user.name,
						createdAt: user._id.generationTime
					};
				}),
				skip: users.skip,
				limit: users.limit,
				total: users.total,
				hasMore: users.hasMore
			}
		}
	};

	res.status(200);
	res.json(response);
}

async function createUser(req: express.Request, res: express.Response): Promise<void> {
	const { value, error } = validate<CreateUserModel>(CreateUserSchema, req.body);

	if (error) {
		throw new Error(error.message);
	}

	const user: UserDbModel = await usersService.createUser({ user: { name: value.name } });

	const response: UserResponseModel = {
		data: {
			user: {
				id: user._id.toHexString(),
				name: user.name,
				createdAt: user._id.generationTime
			}
		}
	};

	res.status(200);
	res.json(response);
}

export { getUser, getUsers, createUser };
