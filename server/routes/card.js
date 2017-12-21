const express = require('express')
const router = express.Router()
const cardQueries = require('../queries/card')
const middleware = require('../middleware')

router.post('/create', middleware.verifyUserAuth, cardQueries.createCard)

module.exports = router
