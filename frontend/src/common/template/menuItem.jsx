// componente funcional MenuItem - é o item de uma lista
import React from 'react'
import {Link} from 'react-router'
export default props => (
    <li>
        <Link href={props.path}> {/* o href tera um parametro - path */}
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span> {/*Dentro do link tera um icone*/}
        </Link>
    </li>
)
