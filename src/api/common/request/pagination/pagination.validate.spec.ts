import { PaginationModel } from './pagination.model';
import { PaginationSchema } from './pagination.validate';

describe('PaginationSchema', () => {
	describe('Validation', () => {
		it('Should not throw an error if all fields are not provided', () => {
			// -- Arrange -- //
			const data: PaginationModel = {};

			// -- Act -- //
			const { error } = PaginationSchema.validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});

		it('Should not throw an error if all fields are provided', () => {
			// -- Arrange -- //
			const data: PaginationModel = {
				limit: 1,
				skip: 1
			};

			// -- Act -- //
			const { error } = PaginationSchema.validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});
});
