import Joi, { CustomValidator } from 'joi';
import { ObjectId } from 'mongodb';

const objectIdValidator: CustomValidator = (value, helpers) => {
	const isValid: boolean = ObjectId.isValid(value);

	if (!isValid) {
		return helpers.error('any.invalid');
	}

	return new ObjectId(value);
};

const objectIdJoi = (): Joi.StringSchema => Joi.string().custom(objectIdValidator);

export { objectIdJoi };
