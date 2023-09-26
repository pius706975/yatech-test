const express = require('express')
const userRouters = express.Router()
const ctrl = require('./user.controllers')
const {Authentication} = require('../../middleware/middle.auth')

userRouters.get('/profile', Authentication, ctrl.GetProfile) 

module.exports = userRouters