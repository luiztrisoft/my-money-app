import React, {Component} from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import contentHeader from '../common/template/contentHeader';

class Dashboard extends Component{
    render(){
        return (
            <div>
                <ContentHeader title='Dashboard' small='versão 1.0'/>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard