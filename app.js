const express =require('express')
const morgan=require('morgan')
const routes=require('./routes')
const bodyParser = require('body-parser')


const app=express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'))
app.use(routes)


module.exports=app


