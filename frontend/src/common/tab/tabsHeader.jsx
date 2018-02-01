// componente que engloba o cabeçalho das abas

import React from 'react'

export default props => (
    <ul className='nav nav-tabs' >
        {props.children}{/*Recebe componentes filhos, que serão englobados por essa div*/}
    </ul>
)