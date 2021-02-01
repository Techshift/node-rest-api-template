import { UserModel } from './user.model';

/**
 * @swagger
 * components:
 *   schemas:
 *     UsersArrayModel:
 *       required:
 *         - items
 *         - skip
 *         - limit
 *         - total
 *         - hasMore
 *       properties:
 *         items:
 *           type: array
 *           items:
 *              $ref: '#/components/schemas/UserModel'
 *         skip:
 *           type: number
 *         limit:
 *           type: number
 *         total:
 *           type: number
 *         hasMore:
 *           type: boolean
 */
export interface UsersArrayModel {
	items: UserModel[];
	skip: number;
	limit: number;
	total: number;
	hasMore: boolean;
}
