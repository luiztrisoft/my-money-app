import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList, showUpdate, showDelete} from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount(){
        //Temos esse método graças ao mapeamento feito através do connect
        this.props.getList()
    }

    renderRows(){
        //Temos esse atributo graças ao mapeamento feito através do connect
        const list = this.props.list || []
        
        // A função map percorre cada um dos elementos do array e retorna um novo array com dados extraídos 
        // Por exemplo informamos um array de alunos e retornamos um array com o nome desses alunos
        return list.map(cycle =>(
            <tr key={cycle._id}>
                <td>{cycle.name}</td>
                <td>{cycle.month}</td>
                <td>{cycle.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={()=> this.props.showUpdate(cycle)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={()=> this.props.showDelete(cycle)}>
                        <i className='fa fa-trash-o'></i>
                    </button>                    
                </td>
            </tr>
        ))
    }
    
    render(){
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>                            
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
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

/**
 * O atributo state é a concatenação de todos os nossos reducers
 * 
 * Quando usamos state.billingCycle.list estamos acessando o reducers.js que contém billingCycle
 * 
 * O atributo billingCycle representa o BillingCycleReducer.js que contém a list que é o 
 * INITIAL_STATE dentro dele. Ela por sua vez pode vir vazia por default ou preenchida com 
 * os dados retornados do backend após a execução da ação BILLING_CYCLES_FETCHED
 * @param {} state 
 */
const mapStateToProps = state => ({list: state.billingCycle.list})

/**
 * Método que dispara a ação para os reducers. Todos os métodos que serão utilzados devem ser
 * informados aqui. No caso existe apenas o getList de billingCycleActions.js
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)

/**
 * O connect lê os métodos mapStateToProps e mapDispatchToProps e depois disso informamos
 * o BillingCycleList decorados com estes dois métodos.
 * 
 * No final das contas dentro da propriedade do BillingCycleList teremos um método chamado
 * getList e um atributo chamado list
 * 
 * Então podemos chamar this.props.getList e this.props.list e teremos acesso ao objeto
 * OBS: Veja o método componentWillMount()
 */
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)