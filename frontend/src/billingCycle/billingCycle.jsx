// componente de classe dos ciclos de pagamento

import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import {selectTab, showTabs} from '../common/tab/tabActions'

import {create, update, remove} from './billingCycleActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import List from './billingCycleList'
import Form from './billingCycleForm'

class BillingCycle extends Component {
   
    componentWillMount() { //Metodo que sempre é chamado quando o componente é renderizado
        this.props.selectTab('tabList') // A partir das propiedades dispara o action creator - Faz com que a aba de listar seja selecionada por padrão sempre que o componente for renderizado na primeira vez ou com um refresh
        this.props.showTabs('tabList', 'tabCreate')
    }
   
    render() {
       return (
           <div>
            <ContentHeader title='Ciclos de Pagamentos' small='Cadastro'/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label='Listar' icon='bars' target='tabList' />
                        <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                        <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                        <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id='tabList'>
                            <List/>
                        </TabContent>
                        <TabContent id='tabCreate'>
                            <Form onSubmit={this.props.create} />{/*Quando o formulario for submetido, será chamada a actionCreate create*/}
                        </TabContent>
                        <TabContent id='tabUpdate'>
                            <Form onSubmit={this.props.update} />
                        </TabContent>
                        <TabContent id='tabDelete'>
                            <Form onSubmit={this.props.remove} readOnly={true} />
                        </TabContent>
                    </TabsContent>
                </Tabs>  
            </Content>
           </div>
       )
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch) // Liga aos action creator deixando eles disponiveis no props do componente
export default connect(null, mapDispatchToProps)(BillingCycle) // Expota o componente e faz a conexão