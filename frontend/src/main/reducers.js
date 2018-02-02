// Configurando o redux - arquivo onde irá combinar todos os reduces da aplicação

import {combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import {reducer as formReducer} from 'redux-form' // import necessario para usar o reduxform que irá gerenciar o estado do formulario

import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

// resultado da combinação de todos os reduces da aplicação
const rootReducer = combineReducers({
    dashboard: DashboardReducer, // dashboard atributo no estado da aplicação, que seria os dados relativos ao dashboard - seguido do estado do dashboard
    tab: TabReducer, // TabReducer é responsavel por gerenciar o atributo tab, onde tem todos os dados relacionado ao estado do componente de aba
    billingCycle: BillingCycleReducer,
    form: formReducer // form agora é um atributo no estado da aplicação que será gerenciado pelo reducer do reduxForm
})

export default rootReducer