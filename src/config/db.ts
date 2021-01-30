import * as mongodb from 'mongodb';

const dbName = 'authentication';
const url = process.env.MONGODB_URL;
const connection = `${url}/${dbName}`;

const client = new mongodb.MongoClient(connection, {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

function open(): Promise<void> {
	return client.connect().then();
}

async function close(): Promise<void> {
	return client.close();
}

function db(): mongodb.Db {
	return client.db(dbName);
}

export { open, close, db };
