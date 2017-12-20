module.exports = {
  "development": {
    "username": process.env.R_FLASHCARD_PG_USER,
    "password": process.env.R_FLASHCARD_PG_SECRET,
    "database": process.env.R_FLASHCARD_PG_DATABASE,
    "host": process.env.R_FLASHCARD_PG_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.R_FLASHCARD_PG_USER,
    "password": process.env.R_FLASHCARD_PG_SECRET,
    "database": process.env.R_FLASHCARD_PG_DATABASE,
    "host": process.env.R_FLASHCARD_PG_HOST,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.R_FLASHCARD_PG_USER,
    "password": process.env.R_FLASHCARD_PG_SECRET,
    "database": process.env.R_FLASHCARD_PG_DATABASE,
    "host": process.env.R_FLASHCARD_PG_HOST,
    "dialect": "postgres"
  },
}
