import {BILLING_SUMMARY_FETCHED}  from "../common/utils/constants";

const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

/**
 * Reducer é uma função pura que recebe dois parametros: O state e a action, que é
 * a ação que é disparada para que o reducer seja chamado
 */
export default function(state = INITIAL_STATE, action){  
    switch (action.type){
        case BILLING_SUMMARY_FETCHED:        
            return  {...state, summary: action.payload.data}
        default:
            return state
    }
}