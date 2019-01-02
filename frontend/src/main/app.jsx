import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
//import Routes from './routes' -- Nova configuração de rotas (aula 159)
import Messages from '../common/msg/messages'

/**
 *   Todo o template será criado a partir desse componente 
 */

export default props =>(
    <div className="wrapper">
        <Header/>
        <Sidebar/>
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer/>
        <Messages/>
    </div>
)