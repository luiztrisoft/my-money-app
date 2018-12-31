import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducers'
/**
 * Esse rootReducer é o resultado da combinação de todos os reducers da aplicação.
 * O papel deste arquivo é concatenar todos os reducers da aplicação.
 * 
 * Reducer é uma função pura que recebe dois parametros: O state e a action, que é
 * a ação que é disparada para que o reducer seja chamado 
 * 
 * Note no arquivo dashboardReducer.js por exemplo que ele exporta a função contendo os dois 
 * parametros que são: state e action
 * 
 * O método mapStateToProps usado em diversas classes mapeia o state através deste reducers.js
 * Por exemplo: state.dashboard.summary, state.tab.selected ou state.billingCycle.list 
 * 
 * Os nossos reducers são recebidos dentro do index.jsx
 */
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer