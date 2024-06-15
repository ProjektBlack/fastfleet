require('dotenv').config({ path: `./environment/.env.${process.env.NODE_ENV}` });
const Database = require('./db.js');

/*
  Creates a new instance of the Database class and connects to the database.
  The connection parameters are read from the environment variables.
*/

const databaseConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA,
};

const dbInstance= new Database(databaseConfig);

module.exports = dbInstance;