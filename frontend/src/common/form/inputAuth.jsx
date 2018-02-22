// componente de input de autenticação - para login e signup

import React from 'react'
import If from '../operador/if'

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback" >
            <input {...props.input}
            className={props.placeholder}
            readOnly={props.readOnly}
            type={props.type}/>
        <span className={`glyphicon glyphicon-${props.icon}
         form-control-feedback`} ></span>
        </div>
    </If>
)   