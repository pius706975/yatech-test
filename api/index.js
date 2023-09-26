const express = require('express')
const appServer = express()
const cors = require('cors')
const response = require('./src/utils/responses')
const db = require('./src/database/config/db.config')
const port = process.env.APP_PORT
const router = require('./src/router/routers')

const corsOptions = {
    origin: 'http://localhost:3000', // it's just react dummy origin. If you want to use this app into FE, make sure you have filled this origin cors option.
    optionsSuccessStatus: 200 
}

appServer.use(cors(corsOptions))
appServer.options('*', cors(corsOptions))

appServer.use(express.json())
appServer.use(express.urlencoded({extended: true}))
appServer.use(router)

appServer.all('*', (req, res, next)=>{
    response(res, 404, 'Sorry! Page not found')
})

db.connect()
.then(()=>{
    console.log('DB connected')
    appServer.listen(port, ()=>{
        console.log(`Server is running on port ${port}`)
    })
}).catch((err)=>{
    console.log(err)
})