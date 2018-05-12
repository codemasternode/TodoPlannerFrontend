import React from 'react'
import loginStyles from '../css/login.css'
import CssModules from 'react-css-modules'
import LoginForm from './LoginForm'

class Login extends React.Component {
    render() {
        return (
            <div>
                <LoginForm />
            </div>
        )
    }
}

export default CssModules(Login, loginStyles)