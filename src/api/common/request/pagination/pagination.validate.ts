import Joi from 'joi';
import { skipJoi } from '../../../../util/joi/skip.joi';
import { limitJoi } from '../../../../util/joi/limit.joi';

const PaginationSchema = Joi.object().keys({
	skip: skipJoi().optional(),
	limit: limitJoi().optional()
});

export { PaginationSchema };
