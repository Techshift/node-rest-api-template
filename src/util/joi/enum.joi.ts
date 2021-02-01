import Joi from 'joi';

const enumJoi = (...values: string[]): Joi.StringSchema =>
	Joi.string()
		.trim()
		.uppercase()
		.valid(...values);

export { enumJoi };
