import Joi from 'joi';
import { nameJoi } from '../../../../util/joi/name.joi';

const CreateUserSchema = Joi.object().keys({
	name: nameJoi().required()
});

export { CreateUserSchema };
