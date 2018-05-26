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

    constructor() {
        super()
        this.state = {
            flag: 0
        }
    }

    render() {
        return (
            <div className="box" >

                <div id="g" onClick={this.loginClick.bind(this)}>
                    Logowanie
                </div>
                <div className="login-form" id="showingForm" ref="loginForm">
                    <LoginForm />
                </div>
                <div>
                    <Link to="/register">
                        Rejestracja
                    </Link>
                </div>

            </div>
        )
    }

    loginClick(e) {
        const loginForm = reactDom.findDOMNode(this.refs.loginForm)
        console.log(loginForm)


        if ($(window).width() > 600) {
            var windowWidth = window.innerWidth
            var loginFormWidth = $(loginForm).width()
            this.setState
            $(loginForm).toggleClass('visibility-logining')
            if ($(loginForm).hasClass('visibility-logining')) {
                let dim = (windowWidth - 450) / 2
                $(loginForm).css('left', dim + 'px')
            }

        } else {
            this.props.history.push('/login')
        }


    }

    componentDidMount() {
        const loginForm = reactDom.findDOMNode(this.refs.loginForm)
        var isInsideLoginForm
        var isInsideLogin

        function removingVisiblityClass(element) {
            $(element).removeClass('visibility-logining')
        }

        $(document).click((e) => {
            if ($(loginForm).hasClass('visibility-logining') && this.state.flag != 0) {
                let loginFormPos = {
                    width: $(loginForm).width(),
                    height: $(loginForm).height(),
                    pos: $(loginForm).position()
                }
                console.log(loginFormPos.pos.left + 'to to')
                if (!((loginFormPos.pos.left < e.clientX) && (loginFormPos.pos.left + loginFormPos.width > e.clientX) && (loginFormPos.pos.top < e.clientY) && (loginFormPos.pos.top + loginFormPos.height > e.clientY))) {
                    $(loginForm).removeClass('visibility-logining')
                }
            }
            if (!$(loginForm).hasClass('visibility-logining')) {
                this.setState({
                    flag: 0
                })
            } else {
                this.setState({
                    flag: this.state.flag + 1
                })
            }

        })

        $(window).resize(() => {
            if ($(loginForm).hasClass('visibility-logining')) {
                $(loginForm).removeClass('visibility-logining')
            }

        })

        this.props.history.listen((location, action) => {
            if ($(loginForm).hasClass('visibility-logining')) {
                $(loginForm).removeClass('visibility-logining')
            }
        })


    }
}

export default withRouter(CssModules(BeforeLogin, navStyles))