import Joi from 'joi';
import { DEFAULT_SKIP, MAX_SKIP, MIN_SKIP } from '../constants';

const skipJoi = (): Joi.NumberSchema => Joi.number().integer().min(MIN_SKIP).max(MAX_SKIP).default(DEFAULT_SKIP);

export { skipJoi };
