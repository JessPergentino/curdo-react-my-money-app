// middleware para habilitar o cors - esse middleware aplica headers na resposta - Ele não responde a requisição

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*') // Habilita receber requisições de qualquer otigem
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') // Diz quais são os metodos que serão permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Wirh, Content-Type, Accept') // Diz quais os header que serão permitidos
    next() // passa para o proximo midddleware, já que ele não responde a requisição
}