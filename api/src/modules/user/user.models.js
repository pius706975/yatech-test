const models = {}
const db = require('../../database/config/db.config')

models.GetProfile = ({user_id})=>{

    return new Promise((resolve, reject)=>{
        db.query(`
            SELECT name, email, password, created_at, updated_at 
            FROM users 
            WHERE user_id = $1`, 
            [user_id])
        .then((res)=>{
            resolve(res.rows)
        }).catch((err)=>{
            reject(err)
        })
    })
}

module.exports = models