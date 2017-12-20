const express = require('express')
const router = express.Router()
const stackQueries = require('../queries/stacks')
const middleware = require('../middleware')

router.get('/list/:user_id', () => {
  console.log('test');
})

// Creation Routes
router.post('/create', middleware.verifyUserAuth, () => {
  console.log('test2');
})
router.put('/update/:stack_id', () => {
  console.log('test3');
})

module.exports = router
