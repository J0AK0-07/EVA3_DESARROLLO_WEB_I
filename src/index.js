const app = require('./app');
const { sequelize } = require('./models');
const logger = require('./logger');

const PORT = process.env.PORT || 3000;

async function start() {
  await sequelize.authenticate();
  await sequelize.sync();
  app.listen(PORT, () => {
    logger.info(`Server listening on port ${PORT}`);
  });
}

start().catch(err => {
  logger.error('Failed to start server: ' + (err && err.stack ? err.stack : err));
  process.exit(1);
});
