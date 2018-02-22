// component funcional do react - baseando em função - irá conter todos os componentes da aplicação
import React from 'react' //referencia para o react

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'

import Messages from '../common/msg/messages'

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar/>
        <div className='content-wrapper' >
           {props.children}
        </div>
        <Footer/>
        <Messages />
    </div>
)