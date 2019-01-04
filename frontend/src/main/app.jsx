//import '../common/template/dependencies' A importação pertende a authOrApp
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
//import Routes from './routes' -- Nova configuração de rotas (aula 159)
import Messages from '../common/msg/messages'

/**
 *   Todo o template será criado a partir desse componente 
 */

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'> 
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)