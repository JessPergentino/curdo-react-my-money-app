//Componete da lista

import React, {Component} from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate} from './billingCycleActions'

class BillingCycleList extends Component {
    
    componentWillMount() {
        this.props.getList()
       
    }
    
    renderRows () { // renderiza dinamicamente as linhas da tabela
        const list = this.props.list || []
        return list.map(bc => ( // extrai do array de billingCycles um array com somente o nome o mes e o ano da billingCycle
            <tr key ={bc._id}>{/*Cada billingCyvle iterada será uma linha na table*/}
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)} >
                        <i className='fa fa-pencil' ></i>
                    </button>
                    
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table' >
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDistpatchToProps = dispatch => bindActionCreators({getList, showUpdate}, dispatch)
export default connect(mapStateToProps, mapDistpatchToProps)(BillingCycleList)