// componente funcional Menu

import React from 'react'
import MenuItem from './menuItem' //referencia para o item do menu
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard'/> {/*Instancia do menuItem com a passagem dos parametros*/}
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' /> {/*Filho do MenuTree*/}
        </MenuTree>
            
    </ul>
)