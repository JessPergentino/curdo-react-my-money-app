// Configuração das rotas

const express = require('express') //referencia para o express

module.exports = function(server) { // mesmo server do outro modulo

    //Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles') // registra os webservices no billingCycles - get, post, put, delete...

}