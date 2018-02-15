// Componente de formulario
import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form' // reduxForm: é uma função que funciona mais ou menos como o connect, ela serve como decoreator, liga o componente com o estado do redux - Field é uma tag que irá controlar os campos do formulario

import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component{
    render() {

        const {handleSubmit} = this.props // metodo do reduxform para processamento do formulario
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>{/*Recebe como parametro a action que será disparada*/}
                    <Field name='name' component={labelAndInput}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='month' component={labelAndInput} type='number' 
                        label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} type='number' 
                        label='Ano' cols='12 4' placeholder='Informe o ano' />
                </div>

                <div className='box-footer' >
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm) //Ligação com o estado do redux