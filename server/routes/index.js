const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))
router.use('/stack', require('./stack'))
router.use('/card', require('./card'))

module.exports = router
