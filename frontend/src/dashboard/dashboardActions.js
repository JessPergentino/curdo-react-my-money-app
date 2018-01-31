// 

import axios from 'axios' // import do axios, que irá no backend pegar as informações
const BASE_URL = 'http://localhost:3003/api' // url do backend da aplicação

// action creator - muda o estado do summary dentro do dashboard
export function getSummary() { // função que irá fazer a chamda do serviço
    const request = axios.get(`${BASE_URL}/billingCycles/summary`) // armazenar a requisição em uma constante - requisição assincrona - o request irá guardar uma promise, que só será resolvida quando o resultado chegar
    return { // retorna um objeto que é uma ação
        type: 'BILLING_SUMMARY_FETCHED', // tipo da ação retornada
        payload: request //resultado da requisição
    }
}