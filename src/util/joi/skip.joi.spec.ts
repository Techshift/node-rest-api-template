import { skipJoi } from './skip.joi';
import { DEFAULT_SKIP, MAX_SKIP, MIN_SKIP } from '../constants';

describe('skipJoi', () => {
	describe('Validate', () => {
		it('Should throw an error if data < MIN_SKIP', () => {
			// -- Arrange -- //
			const data = MIN_SKIP - 1;

			// -- Act -- //
			const { error } = skipJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw an error if data > MAX_SKIP', () => {
			// -- Arrange -- //
			const data = MAX_SKIP + 1;

			// -- Act -- //
			const { error } = skipJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw an error if data > MIN_SKIP && < MAX_SKIP', () => {
			// -- Arrange -- //
			const data = MIN_SKIP + 1;

			// -- Act -- //
			const { error } = skipJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});

	describe('Sanitise', () => {
		it('Should default to DEFAULT_SKIP', async () => {
			// -- Arrange -- //
			const sanitisedData = DEFAULT_SKIP;
			const data = undefined;

			// -- Act -- //
			const { value } = skipJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});
	});
});
