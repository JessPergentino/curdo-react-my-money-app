// componente de classe do dashboard - Componente integrado com o redux

import {connect} from 'react-redux' // import necessario para integrar esse componente com o redux

import {bindActionCreators} from 'redux' // import que faz a ligação entre o componente e a action

import {getSummary} from './dashboardActions'

import React, {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox' // import do componente valueBox
import Row from '../common/layout/row'

class Dashboard extends Component {
    
    //Essa função é chamada sempre que o componenete é renderizado
    componentWillMount(){
        this.props.getSummary() //chama o metodo getSummary
    }

    render() {
        const { credit, debt} = this.props.summary // Atraves do operador destructuring extrai credit e debt da variavel summary
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank'  // Usando o value box passando todos os parametros necessarios para a composição do componente
                            value={`R$ ${credit}`} text='Total de Créditos' />
                        <ValueBox cols='12 4' color='red' icon='credit-card'
                            value={`R$ ${debt}`} text='Total de Débitos' />
                        <ValueBox cols='12 4' color='blue' icon='money'
                            value={`R$ ${credit -debt}`} text='Valor Consolidado' />
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary}) // esse metodo mapeia como o react-redux irá tirar o dado da store e irá colocar nas propriedades do componente - o metodo recebe o state e pega do state o dashboard(atributo do reducers) e do dashboad pega o summary e retorna o summary como propriedade do componente dashboard

const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch) //função que irá fazer a ligação entre o componente e a action - o bindActionCreators faz a ligação entre todos os actions cretors com o dispatch - quando o metodo getSummary for chamado o bindActionCreators irá fazer um dispatch para todos os reducers da aplicação, e se a ação interessar ao reducers, o estado será evoluido e todos os componentes relacionado a ele será renderizado novamente - o mapDispatchToProps adiciona o metodo getSummary as propriedades desse componente

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard) // exporta atraves do padrão decoretor o dashboard já integrado com o redux e com as propriedades summary e getSummary disponiveis