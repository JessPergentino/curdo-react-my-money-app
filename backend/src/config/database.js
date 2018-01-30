const mongoose = require('mongoose')
mongoose.Promise = global.Promise // Utilizado para retirar warning do promise do mongoose, utilizando o promise do node
module.exports = mongoose.connect('mongodb://localhost/mymoney') // Exporta a conexão com o mongodb

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório." // Uma das formas de alterar a mensagem de erro, por não colocar um atributo requerido
mongoose.Error.messages.Number.min = 
    "o '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "o '{VALUE}' informado é maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}' não é valido para o atributo '{PATH}'."