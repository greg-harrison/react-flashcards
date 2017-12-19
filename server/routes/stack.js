const express = require('express')
const router = express.Router()
const stackQueries = require('../queries/stacks')
const middleware = require('../middleware')

router.get('/list/:user_id', stackQueries.getUserCreatedStacks)

// Creation Routes
router.post('/create', middleware.verifyUserAuth, stackQueries.createStack)
router.put('/update/:stack_id', pollQueries.editStack)

module.exports = router
