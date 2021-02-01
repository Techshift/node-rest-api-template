import { CreateUserModel } from './create-user.model';
import { CreateUserSchema } from './create-user.validate';

describe('CreateUserJoi', () => {
	describe('Validation', () => {
		it('Should throw an error if the name is not provided', () => {
			// -- Arrange -- //
			const data: CreateUserModel = {
				name: (undefined as unknown) as string
			};

			// -- Act -- //
			const { error } = CreateUserSchema.validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});
	});
});
