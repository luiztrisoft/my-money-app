import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

import {BASE_URL, BILLING_CYCLES_FETCHED, CYCLE_FORM} from '../common/utils/constants'

const INITIAL_VALUES = {credits: [{}], debts: [{}]}

/**
 * Aqui vão todas as actionCreators que são responsáveis por todas as ações
 */

 export function getList(){
     const request = axios.get(`${BASE_URL}/billingCycles`)
     return {
         type: BILLING_CYCLES_FETCHED,
         payload: request
     }
 }

 
 export function create(values){
    return submit(values, 'post')
}
    
export function update(values){ 
    return submit(values, 'put')   
}
    
export function remove(values){
    return submit(values, 'delete')
}

/**
 * axios.post é substituído por axios[method] (Seria algo semelhante a axios['post'])
 * para atender ao put também deixando o método mais genérico. 
 * @param {*} values 
 * @param {*} method 
 */
function submit(values, method){
    return dispatch =>{
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(e =>{
                e.response.data.errors.forEach(error =>{ toastr.error('Erro', error)})
            })
    }
 }

 export function showUpdate(billingCycle){
     return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize(CYCLE_FORM, billingCycle)
     ]
 }

 //@TODO refatorar para deixar mais genérico. Sugestão da aula 147
 export function showDelete(billingCycle){
    return [
       showTabs('tabDelete'),
       selectTab('tabDelete'),
       initialize(CYCLE_FORM, billingCycle)
    ]
}

 /**
  * O método de salvar dispara quatro actions em caso de sucesso. É necessário que o
  * index.jsx possuam os middlewares thunk e multi associados a store. Exemplo:
  * 
  * const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
  */
 export function init(){
     return [
         showTabs('tabList', 'tabCreate'),
         selectTab('tabList'),
         getList(),
         initialize(CYCLE_FORM, INITIAL_VALUES)
     ]
 }

