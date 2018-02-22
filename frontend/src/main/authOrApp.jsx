// componente que informa qual tela ira aparecer - baseado no token

import '../common/template/dependencies'
import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './app'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'

class AuthOrApp extends Component {

    componentWillMount() {
        if (this.props.auth.user) { // se tiver um usuario
            this.props.validateToken(this.props.auth.user.token) // chama a validação do token
        }
    }

    render() {
        const { user, validToken } = this.props.auth // pegar o user e o validToken

        if (user && validateToken) { // se tiver usuario e o token tiver valido
            axios.defaults.headers.common['authorization'] = user.token // o token sera adicionado ao headers da aplicação - o token é passado em todas as requisições
            return <App>{this.props.children}</App> // retorna o app
        } else if (!user && !validateToken) { // se op usuario não existir e o token for invalido
            return <Auth /> // retorna o auth
        } else { // usuario existe, mas o token é invalido
            return false // retorna false e não renderiza nada, esperando cair em um dos casos
        }
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken },
    dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)