import {BILLING_CYCLES_FETCHED} from '../common/utils/constants'

const INITIAL_STATE = {list:[]}

/**
 * Sempre que ocorrer uma ação eu vou pegar o payload que vier na ação e 
 * evoluir o estado. Assim os componentes associados a este estado serão
 * renderizados
 */
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case BILLING_CYCLES_FETCHED:
            return {...state, list: action.payload.data}
        default: 
            return state
    }
}