//componente de classe - cabeçalho da aba - aba em si

import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectTab} from './tabActions' // import da ação

import If from '../operador/if'

class TabHeader extends Component {
    render() {
        
        const selected = this.props.tab.selected === this.props.target // selected é um boolean que verifica se dentro do estado tab o atributo selected é igual ao target - se for igual quer dizer que essa aba foi selecionada
        const visible = this.props.tab.visible[this.props.target] // se o atributo de visible tiver um nome igual ao do target ele marca como visivel 
        return (
            <If test={visible}>{/*Faz o teste se é visivel*/}
            <li className={selected ? 'active' : ''} >{/*ClassName condicional para saber se a constante selected é verdadeira, se for a aba terá a aparencia de ativada, se não o className será vazio*/}
                <a href='javascript:;' 
                    data-toggle='tab'
                    onClick={() => this.props.selectTab(this.props.target)} //A partir do click é disparada a action passando como parametro o target(id)
                    data-target={this.props.target}>{/*Irá garantir que o conteudo exbido será dessa aba, atravez do id que será passado pelo target*/}
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
            </li>
        </If>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab}) // Mapeamento para o componente ter acesso ao estado tab - state.tab vem do reducers que é gerenciado pelo tabReducer
const mapDispatchToProps= dispatch => bindActionCreators({selectTab}, dispatch) //Mapeamento do action creator para que ele possa ser disparado e disponivel a partir das propiedades desse componente - o dispatch chama um action creator que tem como resultado uma action e a action é passada para os reducers e então estado é evoluido e os componentes são re-renderizados

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader) // decora o compenente para que ele tenha acesso as novas propriedades e conecta o componente com o estado e as actions