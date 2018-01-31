// Configurando o redux - arquivo onde irá combinar todos os reduces da aplicação

import {combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'

// resultado da combinação de todos os reduces da aplicação
const rootReducer = combineReducers({
    dashboard: DashboardReducer // dashboard atributo no estado da aplicação, que seria os dados relativos ao dashboard - seguido do estado do dashboard
})

export default rootReducer