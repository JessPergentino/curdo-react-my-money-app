// Configurando o redux - arquivo onde irá combinar todos os reduces da aplicação

import {combineReducers} from 'redux'

// resultado da combinação de todos os reduces da aplicação
const rootReducer = combineReducers({
    dashboard: () => ({summary: {credit:100, debt:50}}) // dashboard atributo no estado da aplicação, que seria os dados relativos ao dashboard 
})

export default rootReducer