import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {init} from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import {CYCLE_FORM} from '../common/utils/constants'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component{

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum, 0),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum, 0)
        }
    }

    render(){
        //destructuting para facilitar uso das propriedades invés de this.props.readOnly por exemplo
        const {handleSubmit, readOnly, credits, debts} = this.props
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={LabelAndInput} readOnly={readOnly}
                        type='number' label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name='year' component={LabelAndInput} readOnly={readOnly}
                        type='number' label='Ano' cols='12 4' placeholder='Informe o ano'/>

                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos'/>   
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true}/>    
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

//Nos dá o BillingCycleForm, porém decorado, com acesso ao reduxForm
BillingCycleForm = reduxForm({form: CYCLE_FORM, destroyOnUnmount: false}) (BillingCycleForm)

//Pegar o valor do formulario controlado pelo redux através do formValueSelector passando o id do formulario
const selector = formValueSelector(CYCLE_FORM)

//Recebe o estado e retorna um objeto usando o selector para pegar a lista de créditos
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

//Chama o bindActionCreators passando os metodos(nesse caso o init) e o dispatch que atualiza os reducers
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)