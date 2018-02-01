// irá gerencia o estado do componente de abas

const INITIAL_STATE = {selected: '', visible: {}} //estado inicial

// função que evolui o estado - esse metodo é chamado quando uma ação é disparada pelo dispatch
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED': // caso seja essa ação
            return {...state, selected: action.payload} //pega o estado atual e altera o selected recebendo o id da aba que foi retornado na action creator(tabActions) 
        
        case 'TAB_SHOWED': // caso seja essa ação
            return {...state, visible: action.payload} // pega o estado atual e altera a visibilidade
        default: // quando qualquer evento acontece dentro da aplicação todos os reducers são chamados, então é necessario ter um default para quando o evento não interessar ao reducer
            return state // retorna o estado atual
    }
}