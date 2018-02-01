// irá gerencia o estado do componente de abas

const INITIAL_STATE = {selected: ''} //estado inicial

// função que evolui o estado - esse metodo é chamado quando uma ação é disparada pelo dispatch
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED': // caso seja essa ação
            return {...state, selected: action.payload} //pega o estado atual e altera o selected recebendo o id da aba que foi retornado na action creator(tabActions) 
        default: // quando qualquer evento acontece dentro da aplicação todos os reducers são chamados, então é necessario ter um default para quando o evento não interessar ao reducer
            return state // retorna o estado atual
    }
}