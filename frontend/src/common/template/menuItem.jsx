// componente funcional MenuItem - é o item de uma lista
import React from 'react'

export default props => (
    <li>
        <a href={props.path}> {/* o href tera um parametro - path */}
            <i className={`fa fa-${props.icon}`}></i> {props.label} {/*Dentro do link tera um icone*/}
        </a>
    </li>
)
