import { webUrlJoi } from './web-url.joi';

describe('webUrlJoi', () => {
	describe('Validate', () => {
		it('Should throw invalid input error if data only contains whitespace', () => {
			// -- Arrange -- //
			const data = '          ';

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw invalid input error if data.length>2000', () => {
			// -- Arrange -- //
			const data = `www.google.com/${'a'.repeat(2000)}`;

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw invalid input error if data excludes http or https', async () => {
			// -- Arrange -- //
			const data = 'www.google.com';

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});

		it('Should not throw invalid input error if data has http', async () => {
			// -- Arrange -- //
			const data = 'http://www.google.com';

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});

		it('Should not throw invalid input error if data has https', async () => {
			// -- Arrange -- //
			const data = 'https://www.google.com';

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});

		it('Should not throw invalid input error if data has parameters and query strings', async () => {
			// -- Arrange -- //
			const data = 'https://www.google.com/blah?filter=yes';

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});

		it('Should not throw invalid input error if data points includes a file type', async () => {
			// -- Arrange -- //
			const data = 'https://www.google.com/blah.png';

			// -- Act -- //
			const { error } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});

	describe('Sanitise', () => {
		it('Should trim', async () => {
			// -- Arrange -- //
			const sanitisedData = 'www.google.com';
			const data = `  ${sanitisedData}  `;

			// -- Act -- //
			const { value } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});

		it('Should maintain case', async () => {
			// -- Arrange -- //
			const data = 'https://www.gOOGle.com';

			// -- Act -- //
			const { value } = webUrlJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(data);
		});
	});
});
