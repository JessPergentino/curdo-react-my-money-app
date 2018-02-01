//Componente para o Operador if

import React from 'react'

export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}