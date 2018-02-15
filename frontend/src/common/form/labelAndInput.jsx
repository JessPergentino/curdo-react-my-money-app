// comṕonente com o label e input junto - melhoria do layout do formulario

import React from  'react'
import Grid from '../layout/grid' // padrão de 12 colunas do bootstrap

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className='form-control' 
            placeholder={props.placeholder}
            readOnly={props.readOnly} type={props.type}/>
        </div>
    </Grid>

)