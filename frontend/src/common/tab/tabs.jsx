// Componente que irá envolver as abas e seu conteudo

import React from 'react'

export default props => (
    <div className='nav-tabs-custom' >
        {props.children}{/*Recebe componentes filhos, que serão englobados por essa div*/}
    </div>
)