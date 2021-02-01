import { UserModel } from '../models/user.model';

/**
 * @swagger
 * components:
 *   schemas:
 *     UserResponseModel:
 *       required:
 *         - data
 *       properties:
 *         data:
 *           type: object
 *           required:
 *             - user
 *           properties:
 *             user:
 *               $ref: '#/components/schemas/UserModel'
 */
export interface UserResponseModel {
	data: {
		user: UserModel;
	};
}
