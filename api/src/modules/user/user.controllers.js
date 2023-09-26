const controllers = {}
const models = require('./user.models')
const response = require('../../utils/responses')
const bcrypt = require('bcrypt')

controllers.GetProfile = async (req, res)=>{
    try {
        const user = req.userData
        const result = await models.GetProfile({user_id: user.user_id})
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error.message)
    }
}

module.exports = controllers