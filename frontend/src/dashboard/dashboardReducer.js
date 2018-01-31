// será responsavel por evoluir o estado do dashboard

const INITIAL_STATE = {summary: {credit:0, debt:0}} //Define o estado inicial como credit = 0 e debt= 0

export default function(state = INITIAL_STATE, action){ //Função que irá evoluir o estado - a função recebe o estado inicial e uma action
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return {...state, summary: action.payload.data} // caso seja essa action, irá retornar o estado atual(...state) e altera a variavel summary baseado no resultado recebido do request(action.payload.data) do dashboardActions
        default: // caso uma ação não desejada dispare esse reducer é retornado o state atual
            return state 
   }
}