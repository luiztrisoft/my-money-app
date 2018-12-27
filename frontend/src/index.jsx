import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

/*
 * Este arquivo é a entrada da aplicação descrita no webpack.config.js 
 * Ele renderiza o arquivo App que é a raíz de todo o template da aplicação
 */

ReactDOM.render(<App/>, document.getElementById("app"))