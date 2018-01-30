//Midlleware para padronização do tratamento dos erros

const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle // É onde esta a lista de erros

    if(bundle.erros) {
        const errors = parseErrors(bundle.errors) //função q irá fazer o tratamento do erro e o resultado será passado para o array errors
        res.status(500).json({errors})
    } else {
        next() // como se trata de um middleware é necessario chamar o next para passar para o proximo middleware
    }
}

//função que irá pegar os erros
const parseErrors = (nodeRestFulErrors) => {
    const errors = [] // array que será retornado
    _.forIn(nodeRestFulErrors, error  => errors.push(error.message)) // for percorrendo os objetos dentro de error e colocando dentro do array o objeto message que está dentro do objeto error
    return errors
}

