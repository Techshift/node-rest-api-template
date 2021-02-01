import Joi from 'joi';

const webUrlJoi = (): Joi.StringSchema =>
	Joi.string()
		.trim()
		.regex(
			/^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]{0,2000}$)/
		);

export { webUrlJoi };
