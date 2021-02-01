import { enumJoi } from './enum.joi';

const enums = ['ALPHA', 'BRAVO', 'CHARLIE'];

describe('enumJoi', () => {
	describe('Validate', () => {
		it('Should throw an error if data does not match enum', () => {
			// -- Arrange -- //
			const data = 'wrong';

			// -- Act -- //
			const { error } = enumJoi(...enums).validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw an error if data is surrounded by whitespace', async () => {
			// -- Arrange -- //
			const data = ' BRAVO ';

			// -- Act -- //
			const { error } = enumJoi(...enums).validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});

		it('Should not throw an error if data case is different', async () => {
			// -- Arrange -- //
			const data = 'bravo';

			// -- Act -- //
			const { error } = enumJoi(...enums).validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});

	describe('Sanitise', () => {
		it('Should trim', async () => {
			// -- Arrange -- //
			const sanitisedData = 'BRAVO';
			const data = `  ${sanitisedData}  `;

			// -- Act -- //
			const { value } = enumJoi(...enums).validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});

		it('Should convert to uppercase', async () => {
			// -- Arrange -- //
			const sanitisedData = 'BRAVO';
			const data = 'bravo';

			// -- Act -- //
			const { value } = enumJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});
	});
});
