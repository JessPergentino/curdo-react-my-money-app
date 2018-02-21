// Configuração das rotas

const express = require('express') //referencia para o express
const auth = require('./auth')

module.exports = function (server) { // mesmo server do outro modulo
    // Rotas protegidas
    const protectedApi = express.Router() // define o protectedApi apartir do router
    server.use('/api', protectedApi) // coloca o protectedApi dentro do servidor - todo mundo que tiver /api irá cair dentro do protectedApi

    protectedApi.use(auth) // aplica o filtro de autenticação

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(protectedApi, '/billingCycles') // rota adicionada ao protectedApi

    // Rotas publicas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}