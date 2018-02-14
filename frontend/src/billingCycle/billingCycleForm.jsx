// Componente de formulario
import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form' // reduxForm: é uma função que funciona mais ou menos como o connect, ela serve como decoreator, liga o componente com o estado do redux - Field é uma tag que irá controlar os campos do formulario

class BillingCycleForm extends Component{
    render() {

        const {handleSubmit} = this.props // metodo do reduxform para processamento do formulario
        return (
            <form role='form'>
                <div className='box-body' onSubmit={handleSubmit}>{/*Recebe como parametro a action que será disparada*/}
                    <Field name='name' component='input'/>
                    <Field name='month' component='input'/>
                    <Field name='year' component='input'/>
                </div>

                <div className='box-footer' >
                    <button type='submit' className='btn btn-primary' >Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm) //Ligação com o estado do redux