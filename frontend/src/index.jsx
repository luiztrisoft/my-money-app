import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux' 
import {Provider} from 'react-redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//import App from './main/app' -- Nova configuração de rotas (aula 159)
import Routes from './main/routes'
import reducers from './main/reducers'

/*
 * Este arquivo é a entrada da aplicação descrita no webpack.config.js 
 * Ele renderiza o arquivo App que é a raíz de todo o template da aplicação
 */

 /**
  * Váriavel passada no store que habilita o plugin do redux no navegador
  */
 const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()

 /**
  * Definimos a store e passamos os reducers para esse método
  * A store foi criada com um middleware que espera a resolução da promise
  * Sem o middleware a requisição não obtem sucesso pois os dados esperados
  * não são carregados devido ao processo assíncrono 
  */
 const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

//A tag Provider envolve TODA a aplicação passando o estado unico que é a store
ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>    
, document.getElementById("app"))