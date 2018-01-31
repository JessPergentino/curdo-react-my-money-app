//Componente funcional para alinhamento

import React from 'react'

export default props => (
    <div className='row'>{props.children}</div> // O componente que estiver dentro deste componente será englobado pela div com o className row 
)