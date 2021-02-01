import { objectIdJoi } from './object-id.joi';
import { ObjectId } from 'mongodb';

describe('objectJoi', () => {
	describe('Validate', () => {
		it('Should throw an error if data is not a valid object id', () => {
			// -- Arrange -- //
			const data = 'not valid object id';

			// -- Act -- //
			const { error } = objectIdJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeTruthy();
		});

		it('Should not throw an error if data is a valid object id', async () => {
			// -- Arrange -- //
			const data = new ObjectId().toHexString();

			// -- Act -- //
			const { error } = objectIdJoi().validate(data);

			// -- Assert -- //
			expect(error).toBeFalsy();
		});
	});

	describe('Sanitise', () => {
		it('Should convert the string to an object id', async () => {
			// -- Arrange -- //
			const objectId: ObjectId = new ObjectId();
			const data = objectId.toHexString();

			// -- Act -- //
			const { value } = objectIdJoi().validate(data);

			// -- Assert -- //
			expect(value).toEqual(objectId);
		});
	});
});
