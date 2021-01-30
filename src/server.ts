import { app } from './config/app';
import { logger } from './config/logger';
import { PORT } from './config/env';

app.listen(PORT, () => {
	logger.info('Server listening on port ' + PORT);
});
