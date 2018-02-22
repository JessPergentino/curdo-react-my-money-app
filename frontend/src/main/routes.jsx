// Configuração de rotas

import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>{/* Criação das rotas */}
        <Route path='/' component={authOrApp}>
            <Route path='/' component={Dashboard} />{/* Para o caminho / va para o componente dashboard */}
            <Route path='/billingCycles' component={BillingCycle} />{/* Para o caminho /billingClycls va para o componente billingCycle */}
        </Route>
        <Redirect from='*' to='/' />{/* Para qualquer outro caminho (*) redirecione para o dashboard */}
    </Router>
)