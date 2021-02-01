import { nameJoi } from './name.joi';

describe('nameJoi', () => {
	describe('Validate', () => {
		it('Should throw invalid input error if data.length=0', () => {
			// -- Arrange -- //
			const data = '';

			// -- Act -- //
			const { error } = nameJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw invalid input error if data only contains whitespace', () => {
			// -- Arrange -- //
			const data = '          ';

			// -- Act -- //
			const { error } = nameJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw invalid input error if data.length>256', () => {
			// -- Arrange -- //
			const data = 'a'.repeat(257);

			// -- Act -- //
			const { error } = nameJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw invalid input error if data.length<=256', async () => {
			// -- Arrange -- //
			const data = 'a'.repeat(256);

			// -- Act -- //
			const { error } = nameJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});

	describe('Sanitise', () => {
		it('Should trim', async () => {
			// -- Arrange -- //
			const sanitisedData = 'My New String';
			const data = `  ${sanitisedData}  `;

			// -- Act -- //
			const { value } = nameJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});

		it('Should maintain case', async () => {
			// -- Arrange -- //
			const data = 'My New String';

			// -- Act -- //
			const { value } = nameJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(data);
		});
	});
});
