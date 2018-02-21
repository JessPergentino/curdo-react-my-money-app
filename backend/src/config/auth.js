// midleware para verificação do token

const jwt = require('jsonwebtoken')
const env = require('../.env')

// como nossa aplicação tem o cors habilitado ela recebe requisições de qualquer "lugar" 
module.exports = (req, res, next) => {
    //CORS preflight request
    if(req.method === 'OPTIONS') { // como nossa aplicação não tem o metodo OPTIONS - aqui não será validado o token
        next() // e será passado para o proximo midleware
    } else { // caso não seja o metodo options será validado o token
        const token = req.body.token || req.query.token || req.headers['authorization'] // pegar o token
        
        if(!token) { // verifica se o token não existe
            return res.status(403).send({errors: ['No token provided.'] }) // se não existir manda uma mensagem de erro 
        } 

        jwt.verify(token, env.authSecret, function (err, decoded) { // verifica, passando o token e authsecret, valida o token em cima do secret - se a verificação ocorre diferito o token decodiicado é passado para o decoded
            if(err) { // se houver erro, o token é invalido
                return res.status(403).send({
                    errors: ['Failed to authenticate token'] // é passada a mensagem de erro
                })
            } else { // se não houver erro
                //req.decoded = decoded // o decoded é passado para o request
                next() // é dada a continuidade indo para o proximo middleware
            }
        })
    }
}