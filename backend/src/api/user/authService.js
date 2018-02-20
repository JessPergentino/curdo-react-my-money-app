// metodos relativos a autenticação do usuario

const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/ // Expressão regular usada para validar o email - verifica se tem uma sequencia de caracteres antes do arroba se tem dps e se tem dps do ponto mais uma sequencia de caracteres
const passwordRegex = /((?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/ // Expressão regular para validar a senha - verifica se possui digitos, se possui letras minusculas, se possui letras maiusculas, se possui caracteres especiais e se possui de 6 a 20 caracteres

// metodo para tratamento de erros do banco de dados
const sendErrorsFromDB = (res, dbErrors) => {
    const errors =[] // array vazio que ira receber os errros
    _.forIn(dbErrors.errors, error => errors.push(error.message)) // varredura dos erros
    return res.status(400).json({errors}) // retorna os erros
}