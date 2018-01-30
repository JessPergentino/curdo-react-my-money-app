//Componente MenuTree - menu com submenu

import React from 'react'

export default props => (
    <li>
        <a href>
            <i className={`fa fa-${props.icon}`} ></i> {props.label}
            <i className='fa fa-angle-left pull-right'></i>
        </a>

        <ul className='treeview-menu' >
            {props.children} {/*são os filhos do menu - menuItem*/}
        </ul>
    </li>
)