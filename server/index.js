const app = require('./src/app');
const { logger } = require('./src/utils');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server starting listening on port ${port}`);
});
