const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
// queryParser permite informar o inteiro na consulta localhost:3003/api/billingCycles?skip=0&limit=1
const queryParser = require('express-query-int')

//Use o body parser para interpretar o formato urlencoded
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
    console.log(`STATUS DO SERVIDOR: RODANDO NA PORTA ${port}...`)
})

module.exports = server

