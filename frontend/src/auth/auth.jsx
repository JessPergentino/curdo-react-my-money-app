// componente que sera a tela que tera o formulario

import './auth.css'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import If from '../common/operador/if'
import Messages from '../common/msg/messages'
import Input from '../common/form/inputAuth'

class Auth extends Component {
    constructor(props) { // define o estado interno do objeto - indica se o modo login esta ativo ou não
        super(props)
        this.state = { loginMode: true }
    }

    changeMode() { // metodo para a mudança do modo
        this.setState({ loginMode: !this.state.loginMode })
    }

    onSubmit(values) { // metodo de submite do formulario
        const { login, signup } = this.props // actions
        this.state.loginMode ? login(values) : signup(values) //define se sera login ou signup
    }

    render() {
        const { loginMode } = this.state // pega do estado o modo
        const { handleSubmit } = this.props // metodo do redux-form

        return (
            <div className="login-box">

                <div className="login-logo"><b> My</b> Money</div>

                <div className="login-box-body">

                    <p className="login-box-msg">Bem vindo!</p>

                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>

                        <Field component={Input} type="input" name="name"

                            placeholder="Nome" icon='user' hide={loginMode} />

                        <Field component={Input} type="email" name="email"

                            placeholder="E-mail" icon='envelope' />

                        <Field component={Input} type="password" name="password"

                            placeholder="Senha" icon='lock' />

                        <Field component={Input} type="password" name="confirm_password"

                            placeholder="Confirmar Senha" icon='lock' hide={loginMode} />

                        <Row>

                            <Grid cols="4">

                                <button type="submit"

                                    className="btn btn-primary btn-block btn-flat">

                                    {loginMode ? 'Entrar' : 'Registrar'}

                                </button>

                            </Grid>

                        </Row>

                    </form>

                    <br />

                    <a onClick={() => this.changeMode()}>

                        {loginMode ? 'Novo usuário? Registrar aqui!' :

                            'Já é cadastrado? Entrar aqui!'}

                    </a>

                </div>

                <Messages />
            </div>
        )
    }
}

Auth = reduxForm({ from: 'authForm' })(Auth) // necessario para a utilização do reduxForm
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(Auth)

