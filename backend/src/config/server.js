// Arquivo responsavel pelas configurações do servidor

const port = 3003

const bodyParser = require('body-parser') // Faz o parser do corpo da requisição
const express = require('express') //Tem uma instancia unica
const server = express() //Passa essa instancia para a variavel server
const allowCors = require('./cors') //referencia para o cors
const queryParser = require('express-query-int') //referencia para o middleware que ira fazer o parser da string para inteiro, quando for passada na url na hora da busca - billingCycles?skip=0&limit=1

server.use(bodyParser.urlencoded({extended: true})) //Para toda requisição com corpo urlencoded faça um parser
server.use(bodyParser.json()) // Faz um parser para toda requisição com corpo json
server.use(allowCors) //Aplicação do middleware
server.use(queryParser())// Aplicação do middleware na cadeia de middlewares

server.listen(port, function() {
    console.log(`BACKEND está rodando na porta ${port}.`)

})

module.exports = server // exportando o server para ele servir de parametro na referencia no loader.js