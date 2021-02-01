/**
 * @swagger
 * components:
 *   schemas:
 *     UserModel:
 *       required:
 *         - id
 *         - name
 *         - createdAt
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         createdAt:
 *           type: number
 */
export interface UserModel {
	id: string;
	name: string;
	createdAt: number;
}
