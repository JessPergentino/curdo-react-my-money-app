//Criação dos serviços web(rest)

const BillingCycle = require('./billingCycle') // referencia para modelo da classe de mapeamento - é oq foi exportado de la

//Aplicando o middleware errorHandle
//refeferencia para o middleware
const errorHandle = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new:true, runValidators: true}) //Retorna o objeto atualiado e faz as validações

//Vou interceptar apos o post e o put
BillingCycle.after('post', errorHandle).after('put', errorHandle)

// O count servira para a paginação no frontend
BillingCycle.route('count', (req,res,next) => { // configuração do serviço/rota count
    BillingCycle.count((error,value) => { // count tem dois atributos error e value
        if(error) { // caso o error venha setado, será retornado um objeto errors com um vetor com o propio error/mensagem
            res.status(500).json({errors: [error]})
        } else {
            res.json({value}) // caso contrario sera retornado o atributo value com a quantidade de registros
        }
    })
})

// serviço de sumario

BillingCycle.route('summary', (req,res,next) => {
    BillingCycle.aggregate({ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} //Primeiro faz a soma individual do registro - soma todos os creditos e dps todos os debitos e coloca em credt e debt
    }, {
        $group: {_id: null, credit: {$sum:"$credit"}, debt: {$sum: "$debt"}} //Agrupamento de todos os documentos
    },{
        $project: {_id: 0, credit:1, debt:1} // projeta somente o credito e debito
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit:0, debt:0})
        }
    })
})

module.exports = BillingCycle

