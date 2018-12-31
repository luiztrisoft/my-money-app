import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm} from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

import {BASE_URL, BILLING_CYCLES_FETCHED, CYCLE_FORM} from '../common/utils/constants'
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

 /**
  * O método de salvar dispara quatro actions em caso de sucesso. É necessário que o
  * index.jsx possuam os middlewares thunk e multi associados a store. Exemplo:
  * 
  * const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
  * 
  * @param {} values 
  */
 export function create(values){
    return dispatch =>{
        const request = axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch([
                    resetForm(CYCLE_FORM),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList, tabCreate')
                ])
            })
            .catch(e =>{
                e.response.data.errors.forEach(error =>{ toastr.error('Erro', error)})
            })
    }
 }

 export function showUpdate(billingCycle){
     return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate')
     ]
 }

