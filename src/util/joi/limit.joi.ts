import Joi from 'joi';
import { DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT } from '../constants';

const limitJoi = (): Joi.NumberSchema => Joi.number().integer().min(MIN_LIMIT).max(MAX_LIMIT).default(DEFAULT_LIMIT);

export { limitJoi };
