import Joi from 'joi';

function validate<T>(schema: Joi.ObjectSchema, data: unknown): { value: T; error: Joi.ValidationError | undefined } {
	const { value, error } = schema.validate(data);

	return {
		value,
		error
	};
}

export { validate };
