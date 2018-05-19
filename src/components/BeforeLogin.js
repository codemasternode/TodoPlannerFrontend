import $ from 'jquery'
import reactDom from 'react-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'
import LoginForm from './LoginForm';
import navStyles from '../css/nav.css'
import CssModules from 'react-css-modules'

class BeforeLogin extends React.Component {
    render() {
        return (
            <div className="box" >
                <div id="g" onClick={this.loginClick.bind(this)}>
                    Logowanie
                    </div>
                <div className="login-form" ref="loginForm">
                    <LoginForm />
                </div>
                <div>
                    <Link to="/register">
                        Rejestracja
                </Link>
                </div>
            </div>)
    }

    loginClick(e) {
        const loginForm = reactDom.findDOMNode(this.refs.loginForm)
        if ($(window).width() > 600) {
            $(loginForm).toggleClass('visibility-logining')
        } else {
            this.props.history.push('/login')
        }
    }

    componentDidMount() {
        const loginForm = reactDom.findDOMNode(this.refs.loginForm)
        $(window).resize(() => {
            if ($(loginForm).hasClass('visibility-logining')) {
                $(loginForm).removeClass('visibility-logining')
            }
        })

        

        // $(window).click(() => {
        //     if ($(loginForm).hasClass('visibility-logining')) {
        //         $(loginForm).removeClass('visibility-logining')
        //     }
        // })
        this.props.history.listen((location, action) => {
            if ($(loginForm).hasClass('visibility-logining')) {
                $(loginForm).removeClass('visibility-logining')
            }
        })
    }
}

export default withRouter(CssModules(BeforeLogin, navStyles))