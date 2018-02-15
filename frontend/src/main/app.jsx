// component funcional do react - baseando em função - irá conter todos os componentes da aplicação
import '../common/template/dependencies' //referencia para as dependencias
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
            <Routes />
        </div>
        <Footer/>
        <Messages />
    </div>
)