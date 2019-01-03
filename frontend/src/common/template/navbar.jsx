import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    changeOpen() {
        this.setState({ open: !this.state.open })
    }

    render() {
        const { name, email } = this.props.user
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <li onMouseLeave={() => this.changeOpen()}
                        className={`dropdown user user-menu ${this.state.open ? 'open' :
                            ''}`}>
                        <a href="javascript:;" onClick={() => this.changeOpen()}
                            aria-expanded={this.state.open ? 'true' : 'false'}
                            className="dropdown-toggle"
                            data-toggle="dropdown">
                            <img src="http://lorempixel.com/160/160/abstract"
                                className="user-image" alt="User Image" />
                            <span className="hidden-xs">{name}</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="user-header">
                                <img src="http://lorempixel.com/160/160/abstract"
                                    className="img-circle" alt="User Image" />
                                <p>{name}<small>{email}</small></p>
                            </li>
                            <li className="user-footer">
                                <div className="pull-right">
                                    <a href="#" onClick={this.props.logout}
                                        className="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

//state é o estado gerenciado pelo redux, auth está contido nos reducers que contém o atributo user
const mapStateToProps = state => ({ user: state.auth.user })

//Nesse mapeamento deixamos o logout(e outros metodos se for o caso) disponivel dentro de this.props.logout
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

//O connect passa o Navbar decorado com os mapeamentos
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)