// Componente que ira conter o conteudo da aba

import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import If from '../operador/if'

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id // constante booleana verificando se o conteudo é da aba selecionada
        const visible = this.props.tab.visible[this.props.id] // se o atributo de visible tiver um nome igual ao do id ele marca como visivel 
        return (
            <If test={visible}>{/*Faz o teste se é visivel*/}
                <div id={this.props.id} //Esse id corresponde ao target do cabeçalho
                className={`tab-pane ${selected ? 'active' : ''}`}>{/*ClassName condicional para ativar ou não o conteudo*/}
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab}) // Mapeamento para o componente ter acesso ao estado tab - state.tab vem do reducers que é gerenciado pelo tabReducer
export default connect(mapStateToProps)(TabContent) // Exporta o componente com a conexão com o estado