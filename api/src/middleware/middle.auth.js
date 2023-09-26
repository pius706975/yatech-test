const response = require('../utils/responses')
const jwt = require('jsonwebtoken')
const middleware = {}
const authModels = require('../modules/user/auth/auth.models')

middleware.Authentication = async (req, res, next)=>{

    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return response(res, 400, {message: 'You need to login first'})
        }

        const token = authHeader.split(' ')[1]
        if (!token) {
            return response(res, 40, {message: 'Token is required'})
        }

        const blacklistTokenCheck = await authModels.BlacklistCheck({blacklist_token: token})
        const autoRemove = await authModels.autoRemoveBlacklistToken()
        if (blacklistTokenCheck.length > 0) {
            return response(res, 401, {message: 'You need to re-login'})
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        req.userData = decoded
        console.log(decoded)

        next()
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

module.exports = middleware