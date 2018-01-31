// Configuração de rotas

import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>{/* Criação das rotas */}
        <Route path='/' component={Dashboard} />{/* Para o caminho / va para o componente dashboard */}
        <Route path='/billingCycles' component={BillingCycle} />{/* Para o caminho /billingClycls va para o componente billingCycle */}
        <Redirect from='*' to='/' />{/* Para qualquer outro caminho (*) redirecione para o dashboard */}
    </Router>
)