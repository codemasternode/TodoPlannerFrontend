import React from 'react'
import navStyles from '../css/nav.css'
import CssModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';
import $ from 'jquery'
import reactDom from 'react-dom'
import { withRouter } from 'react-router-dom'


class Nav extends React.Component {


    loginClick(e) {
        const loginForm = reactDom.findDOMNode(this.refs.loginForm)
        if ($(window).width() > 600) {
            $(loginForm).toggleClass('visibility-logining')
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



    render() {
        return (
            <div className="nav primary">
                <div className="logo">
                    <h2>
                        <Link to="/">TodoPlanner</Link>
                    </h2>
                </div>
                <div className="box">
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
                </div>
            </div>
        )
    }
}

export default withRouter(CssModules(Nav, navStyles))