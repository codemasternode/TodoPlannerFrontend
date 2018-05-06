import React from 'react'
import loginStyles from '../css/login.css'
import CssModules from 'react-css-modules'

class Login extends React.Component {
    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}

export default CssModules(Login, loginStyles)