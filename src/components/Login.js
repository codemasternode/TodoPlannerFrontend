import React from 'react'
import loginStyles from '../css/login.css'
import CssModules from 'react-css-modules'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    render() {
        if (this.props.loginResult.authenticated) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="container">
                <LoginForm />
            </div>
        )
    }
}

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

export default connect(mapStateToProps, undefined)(CssModules(Login, loginStyles))