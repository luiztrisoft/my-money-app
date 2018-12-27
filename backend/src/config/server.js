const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//Use o body parser para interpretar o formato urlencoded
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`STATUS DO SERVIDOR: RODANDO NA PORTA ${port}...`)
})

module.exports = server

