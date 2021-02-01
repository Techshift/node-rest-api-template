import Joi from 'joi';

const nameJoi = (): Joi.StringSchema => Joi.string().trim().min(1).max(256);

export { nameJoi };
