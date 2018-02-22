//Actions da autorização

import {toastr} from 'react-redux-toastr' // import do toastr para as mensagens
import axios from 'axios' // faz as chamadas ao backend
import consts from '../const' // urls bases

// função de login - passa os valores a serem submetidos e a url
export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`)
}

// função de signup - passa os valores a serem submetidos e a url
export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`)
}

function submit(values, url) { // metodo para submeter os formularios de altenticação (login e signup) - é passado os valores para a submição e a url
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    {type: 'USER_FETCHED', payload: resp.data} // caso a submição aconteça sem erros é passado o usuario no payload e action é USER_FETCHED
                ])
            })
            .catch(e => { // caso haja erro
                e.respose.data.forEach( // será feito um foreach pelos erros
                    error => toastr.error('Erro', error) // e será mostrado a mensagem de erro
                )
            })
    }
}

// função de logout
export function logout() {
    return {type: 'TOKEN_VALIDATED', payload: false} // dispara a action do tipo token validado e passando false no payload
}

// função de validação do token - que recebe o token como parametro
export function validateToken(token) {
    return dispatch => {
        if(token) { // testa se realmente tem um token
            axios.post(`${consts.OAPI_URL}/validateToken`, {token}) // passa o token para o backend
                .then(resp => { // passa uma resposta
                    dispatch({type: 'TOKEN_VALIDATED', payload: resp.data.valid}) // recebe uma reposta verdadeira ou falsa
                })
                .catch(e => dispatch({type: 'TOKEN_VALIDATED', payload: false})) // se der problema passa o token para falso
        } else { // se não tiver um token
            dispatch({type: 'TOKEN_VALIDATED', payload: false}) // passa o token para false
        }
    }
}