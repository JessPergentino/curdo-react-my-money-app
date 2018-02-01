//componente que irá agrupar os conteudos das abas

import React from 'react'

export default props => (
    <div className='tab-content' >
        {props.children}{/*Recebe componentes filhos, que serão englobados por essa div*/}
    </div>
)