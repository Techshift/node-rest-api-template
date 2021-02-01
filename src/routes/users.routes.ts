import * as express from 'express';
import { getUsers, getUser, createUser } from '../controllers/users/users.controller';

function usersRoute(app: express.Application): void {
	/**
	 * @swagger
	 * /users:
	 *   get:
	 *     summary: Gets a list of users
	 *     security:
	 *       - basicAuth: []
	 *       - bearerAuth: []
	 *     tags:
	 *       - Users
	 *     parameters:
	 *       - $ref: '#/components/parameters/limitQueryParam'
	 *       - $ref: '#/components/parameters/skipQueryParam'
	 *     responses:
	 *       200:
	 *         description: The users
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/UsersResponseModel'
	 */
	app.get('/users', (req: express.Request, res: express.Response) => {
		getUsers(req, res);
	});

	/**
	 * @swagger
	 * /users:
	 *   post:
	 *     summary: Creates a user
	 *     security:
	 *       - basicAuth: []
	 *       - bearerAuth: []
	 *     tags:
	 *       - Users
	 *     requestBody:
	 *       description: The user creation object
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/CreateUserModel'
	 *     responses:
	 *       200:
	 *         description: The created user
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/UserResponseModel'
	 */
	app.post('/users', (req: express.Request, res: express.Response) => {
		createUser(req, res);
	});

	/**
	 * @swagger
	 * /users/{userId}:
	 *   get:
	 *     summary: Gets a user by id
	 *     security:
	 *       - basicAuth: []
	 *       - bearerAuth: []
	 *     tags:
	 *       - Users
	 *     parameters:
	 *       - in: path
	 *         name: userId
	 *         schema:
	 *           type: string
	 *         required: true
	 *         description: The id of the user.
	 *     responses:
	 *       200:
	 *         description: The user
	 *         content:
	 *           application/json:
	 *             schema:
	 *               $ref: '#/components/schemas/UserResponseModel'
	 */
	app.get('/users/:userId', (req: express.Request, res: express.Response) => {
		getUser(req, res);
	});
}

export { usersRoute };
