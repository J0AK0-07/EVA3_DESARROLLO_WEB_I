const { Sequelize } = require('sequelize');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, { logging: false });
} else if (process.env.DB_NAME && process.env.DB_USER) {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  });
} else {
  // fallback to sqlite for simple local runs/tests
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '..', '..', 'database.sqlite'),
    logging: false,
  });
}

const Project = require('./project')(sequelize);

module.exports = { sequelize, Project };
