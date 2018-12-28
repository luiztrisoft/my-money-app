import axios from 'axios'
import {BILLING_SUMMARY_FETCHED}  from "../common/utils/constants";

const BASE_URL = 'http://localhost:3003/api'

/**
 * Esta é uma requisição assincrona que irá guardar uma Promise que será resolvida
 * apenas quando o resultado chegar
 */
export function getSummary(){
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}