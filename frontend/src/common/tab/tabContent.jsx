// Componente que ira conter o conteudo da aba

import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class TabContent extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.id // constante booleana verificando se o conteudo é da aba selecionada
        return (
            <div id={this.props.id} //Esse id corresponde ao target do cabeçalho
            className={`tab-pane ${selected ? 'active' : ''}`}>{/*ClassName condicional para ativar ou não o conteudo*/}
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab}) // Mapeamento para o componente ter acesso ao estado tab - state.tab vem do reducers que é gerenciado pelo tabReducer
export default connect(mapStateToProps)(TabContent) // Exporta o componente com a conexão com o estado