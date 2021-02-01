import Joi from 'joi';

const descriptionJoi = (): Joi.StringSchema => Joi.string().trim().min(1).max(1024);

export { descriptionJoi };
