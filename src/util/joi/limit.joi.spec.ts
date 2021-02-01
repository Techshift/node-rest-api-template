import { limitJoi } from './limit.joi';
import { DEFAULT_LIMIT, MAX_LIMIT, MIN_LIMIT } from '../constants';

describe('limitJoi', () => {
	describe('Validate', () => {
		it('Should throw an error if data < MIN_LIMIT', () => {
			// -- Arrange -- //
			const data = MIN_LIMIT - 1;

			// -- Act -- //
			const { error } = limitJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should throw an error if data > MAX_LIMIT', () => {
			// -- Arrange -- //
			const data = MAX_LIMIT + 1;

			// -- Act -- //
			const { error } = limitJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw an error if data > MIN_LIMIT && < MAX_LIMIT', () => {
			// -- Arrange -- //
			const data = MIN_LIMIT + 1;

			// -- Act -- //
			const { error } = limitJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});

	describe('Sanitise', () => {
		it('Should default to DEFAULT_LIMIT', async () => {
			// -- Arrange -- //
			const sanitisedData = DEFAULT_LIMIT;
			const data = undefined;

			// -- Act -- //
			const { value } = limitJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(sanitisedData);
		});
	});
});
