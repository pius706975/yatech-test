const express = require('express')
const authRouters = require('../modules/user/auth/auth.routers')
const userRouters = require('../modules/user/user.routers')
const router = express.Router()

router.use('/auth', authRouters)
router.use('/user', userRouters)

module.exports = router