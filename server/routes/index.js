const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))
router.use('/stack', require('./stack'))

module.exports = router
