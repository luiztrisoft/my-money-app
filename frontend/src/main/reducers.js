import {combineReducers} from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
/**
 * Esse rootReducer é o resultado da combinação de todos os reducers da aplicação.
 * O papel deste arquivo é concatenar todos os reducers da aplicação.
 * Reducer é uma função pura que recebe dois parametros: O state e a action, que é
 * a ação que é disparada para que o reducer seja chamado 
 * Note no arquivo dashboardReducer.js que ele exporta a função contendo os dois 
 * parametros que são: state e action
 */
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer