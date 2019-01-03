import { stringify } from "querystring";
import {USER_FETCHED, TOKEN_VALIDATED} from '../common/utils/constants'

/**
 * reducer evolui parte do store que é gerenciado pelo redux
 */

 const userKey = '_mymoney_user'
 const INITIAL_STATE = {
     // {name: 'Luiz Alberto', email: 'luiz.trisoft@gmail.com'},//
     user: JSON.parse(localStorage.getItem(userKey)),
     validToken:false
 }

 export default(state = INITIAL_STATE, action)=>{
     switch(action.type){
         case TOKEN_VALIDATED:
            if(action.payload){
                return {...state, validToken: true}
            }else{
                localStorage.removeItem(userKey)
                return {...state, validToken: false, user: null}
            }
        case USER_FETCHED:
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return {...state, user: action.payload, validToken: true}
        default:
            return state    
     }
 }