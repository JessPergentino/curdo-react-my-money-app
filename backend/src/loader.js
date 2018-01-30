// arquivo que carregara a aplicação

const server = require('./config/server') // referencia para o servidor
require('./config/database') // referencia para o banco de dados
require('./config/routes') (server) // referencia para as rotas com o parametro server