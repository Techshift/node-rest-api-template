import { UsersArrayModel } from '../models/users-array.model';

/**
 * @swagger
 * components:
 *   schemas:
 *     UsersResponseModel:
 *       required:
 *         - data
 *       properties:
 *         data:
 *           type: object
 *           required:
 *             - users
 *           properties:
 *             users:
 *               $ref: '#/components/schemas/UsersArrayModel'
 */
export interface UsersResponseModel {
	data: {
		users: UsersArrayModel;
	};
}
