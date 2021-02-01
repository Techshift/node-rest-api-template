import { descriptionJoi } from './description.joi';

describe('descriptionJoi', () => {
	describe('Validate', () => {
		it('Should throw invalid input error if data.length=0', () => {
			// -- Arrange -- //
			const data = '';

			// -- Act -- //
			const { error } = descriptionJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw invalid input error if data only contains whitespace', () => {
			// -- Arrange -- //
			const data = '          ';

			// -- Act -- //
			const { error } = descriptionJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw invalid input error if data.length>1024', () => {
			// -- Arrange -- //
			const data = 'a'.repeat(1025);

			// -- Act -- //
			const { error } = descriptionJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw invalid input error if data.length<=1024', async () => {
			// -- Arrange -- //
			const data = 'a'.repeat(1024);

			// -- Act -- //
			const { error } = descriptionJoi().validate(data);

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
			const { value } = descriptionJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});

		it('Should maintain case', async () => {
			// -- Arrange -- //
			const data = 'My New String';

			// -- Act -- //
			const { value } = descriptionJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(data);
		});
	});
});
