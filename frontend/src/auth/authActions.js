import {toastr} from 'react-redux-toastr'
import axios from 'axios'
import consts from '../main/consts'
import {USER_FETCHED, TOKEN_VALIDATED} from '../common/utils/constants'

export function login(values){
    return submit(values, `${consts.OAPI_URL}/login`)
}

export function signup(values){
    return submit(values, `${consts.OAPI_URL}/signup`)
}

/**
 * Basicamente ele seta o action.payload no user da action e no localStorage no navegador
 * O parametro validToken recebe o valor true
 * @param {*} values 
 * @param {*} url 
 */
function submit(values, url){
    return dispatch =>{
        axios.post(url, values)
            .then(resp =>{
                dispatch([
                    {type: USER_FETCHED, payload: resp.data}
                ])
            })
            .catch(e =>{
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

/**
 * Ao atribuir false para o payload o reducer atribuirá o mesmo valor para o 
 * parametro validToken e null para o user no else da condição.
 */
export function logout(){
    return {type: TOKEN_VALIDATED, payload:false}
}

/**
 * Função de validação do token. Se o token existir, será feita uma requisição informando 
 * o token onde, teremos o token validado no then como resposta
 * Em caso de insucesso o payload simplesmente receberá um valor false e no else do reducer
 * o parametro validToken receberá false e o user receberá null.
 * @param {*} token 
 */
export function validateToken(token){
    return dispatch =>{
        if(token){
            axios.post(`${consts.OAPI_URL}/validateToken`, {token})
                .then(resp => {
                    dispatch({type: TOKEN_VALIDATED, payload: resp.data.valid})
                })
                .catch(e => dispatch ({type: TOKEN_VALIDATED, payload: false}))
        }else{
            dispatch({type: TOKEN_VALIDATED, payload: false})
        }
    }
}
