import { createLogger, format, transports } from 'winston';

const logFormat = format.combine(
	format.timestamp({
		format: 'YYYY-MM-DD HH:mm:ss'
	}),
	format.json()
);

export const logger = createLogger({
	level: process.env.LOG_LEVEL || 'info',
	exitOnError: false,
	format: logFormat,
	transports: [new transports.Console()]
});
