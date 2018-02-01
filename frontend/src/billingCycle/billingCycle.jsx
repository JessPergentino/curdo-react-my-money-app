// componente de classe dos ciclos de pagamento

import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import {selectTab} from '../common/tab/tabActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class BillingCycle extends Component {
   
    componentWillMount() { //Metodo que sempre é chamado quando o componente é renderizado
        this.props.selectTab('tabList') // A partir das propiedades dispara o action creator - Faz com que a aba de listar seja selecionada por padrão sempre que o componente for renderizado na primeira vez ou com um refresh
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
                        <TabContent id='tabList'><h1>Lista</h1></TabContent>
                        <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                        <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                        <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                    </TabsContent>
                </Tabs>  
            </Content>
           </div>
       )
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch) // Liga ao action creator deixando o selectTab disponivel nas propiedades do componente
export default connect(null, mapDispatchToProps)(BillingCycle) // Expota o componente e faz a conexão