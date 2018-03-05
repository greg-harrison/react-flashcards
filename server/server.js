const express = require('express')
const routes = require('./routes')
const logger = require('morgan')
const cors = require('cors')
const middleware = require('./middleware')

const passport = require('passport')
const passportInstance = require('./auth/passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const port = process.env.R_FLASHCARD_BE_PORT || 8081

const app = express()

let corsOptions = {
  "origin": 'http://localhost:8080' || 'http://localhost:3001',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "cookie": { secure: false, maxAge: (4 * 60 * 60 * 1000) }, // 4 hours
}

app.use(cors(corsOptions));
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json('*/*'));
app.use(cookieParser())
app.use(middleware.malformedUrl)
app.use(middleware.verifyUserAuth)

// passport set-up
app.use(session({
  secret: process.env.R_FLASHCARD_PASSPORT_SECRET,
  resave: false,
  saveUninitialized: true
}))

passportInstance(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use('/', routes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
