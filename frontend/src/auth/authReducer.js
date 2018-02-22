// reducer que irá evoluir o estado da parte de autenticação e irá fazer mudanças no local storage

const userKey = '_mymoney_user' // chave que será armazenada no local storage do browser
const INITIAL_STATE = { // estado inicial com dois atributos
    user: JSON.parse(localStorage.getItem(userKey)), // sera armazenado o que tiver no local storage - fazendo um parse do json
    validToken: false // inicialmente será falso - sempre que entrar na aplicação o token vai esta falso
}

//metodo que irá fazer a evolução do estado - localStorage é variavel de escopo global do browser pode ser usado em qualquer lugar da aplicação
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOKEN_VALIDATED': // action para quando o token for validado
            if(action.payload) { // se o payload vier verdadeiro
                return {...state, validToken: true} // pega o estado atual e altera o validToken para true
            } else { // se o token for falso
                localStorage.removeItem(userKey) // remove o usuario que estiver no localstorage apartir da constante userKey
                return {...state, validToken: false, user: null} // pega o estado e altera o token para falso e seta o usuario para null - garante que o usuario não estara logado na aplicação
            }
        case 'USER_FETCHED': // action para quando o usuario é obtido - o usuario já passou pelo signup ou fez o login
            localStorage.setItem(userKey, JSON.stringify(action.payload)) // pega o usuario no payload - serializa o usuario - armazena o usuario no localstorage
            return {...state, user:action.payload, validToken:true} // retorna o estado atual mais o usuario e altera o validToken para true
        
        default:
            return state
     }
}