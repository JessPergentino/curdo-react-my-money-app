//componente funcional que será integrado ao dashboard e recebe o grid- para a visualização do total de credito, debito e o consolidado

import React from 'react'
import Grid from '../layout/grid'

export default props => (  
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`} >{/*Div para determinar a cor*/}
            <div className='inner' >{/*div para agrupar o valor que serar informado e um texto*/}
                <h3>{props.value}</h3>
                <p>{props.text}</p>
            </div>
            <div className='icon' >{/*Icone do valueBox*/}
                <i className={`fa fa-${props.icon}`} ></i>
            </div>
        </div>
    </Grid>
)