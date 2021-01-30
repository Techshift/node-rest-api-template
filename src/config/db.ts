import * as mongodb from 'mongodb';
import { logger } from './logger';
import { MONGO_URL } from './env';

const dbName = 'authentication';
const connection = `${MONGO_URL}/${dbName}?retryWrites=false`;

const client = new mongodb.MongoClient(connection, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

function open(): Promise<void> {
	return client.connect().then(() => {
		logger.info('MongoDB Connected');
	});
}

async function close(): Promise<void> {
	return client.close();
}

function db(): mongodb.Db {
	return client.db(dbName);
}

export { open, close, db };
