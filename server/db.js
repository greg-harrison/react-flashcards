const options = {
  promiseLib: require('bluebird')
};

const pgp = require('pg-promise')(options);
const connectionString = process.env.R_FLASHCARD_PG_CONNECTION_URI;
const db = pgp(connectionString);

module.exports = db
