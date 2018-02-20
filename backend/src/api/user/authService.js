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

//metodo de login
const login = (req, res, next) => {
    const email = req.body.email || '' // pega no body do request o email
    const password = req.body.password || '' // pega no body do request a senha

    // Busca pela coleção de usuários usando o email - recebe como resposta um unico usuario ou um erro 
    User.findOne({email}, (err, user) => {
        if(err) { // se houver um erro retorna o erro
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) { // se não houver erro - usando o bcrypt compara a senha recebida com a senha do usuario
            const token = jwt.sign(user, env.authSecret, { // se a comparação for bem sucedida cria o token
                expiresIn: "1 day" // o token tem data de validade de 1 dia
            })
            const {name, email} = user // extrai o nome e o email do usuario
            res.json({name, email, token}) // a resposta sera um json com o nome o email e o token
        } else { // se as verificações não forem bem sucedidas é mandado um erro informando que o usuario ou senha esta incorreto
            return res.status(400).send({errors: ['Usuários/Senha inválidos']})
        }
    })
}

//metodo de validação do token
const validateToken = (req, res, next) => {
    const token = req.body.token || '' // recebe o token
    
    jwt.verify(token, env.authSecret, function(err, decoded){ // verifica se deu erro ou se o token veio decodificado
        return res.status(200).send({valid: !err}) // retorna a resposta se não tiver erro retorna true se tiver retorna false
    })
}