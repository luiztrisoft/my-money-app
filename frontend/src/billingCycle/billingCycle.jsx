import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import {selectTab, showTabs} from '../common/tab/tabActions'

class BillingCycle extends Component{

    componentWillMount(){
        //Aba lista aparecendo por padrão
        this.props.selectTab('tabList')

        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title="Ciclo de pagamentos" small="Cadastro"/>
                <Content>
                    <Tabs>
                        <TabsHeader>                            
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>

                        <TabsContent>   
                            <TabContent id='tabList'><h1>Lista</h1></TabContent>
                            <TabContent id='tabCreate'><h1>Incluir</h1></TabContent>
                            <TabContent id='tabUpdate'><h1>Atualizar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Remover</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)