import express, { Express } from 'express';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import { usersRoute } from '../routes/users.routes';

const app: Express = express();

// support application/json type post data
app.use(bodyParser.json());

//support application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(helmet());

usersRoute(app);

export { app };
