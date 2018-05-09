import React from 'react'
import navStyles from '../css/nav.css'
import CssModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm';


class Nav extends React.Component {
    render() {
        return (
            <div className="nav primary">
                <div className="logo">
                    <h2>
                        <Link to="/">TodoPlanner</Link>
                    </h2>
                </div>
                <div className="box">
                    <div>
                        Logowanie
                    </div>
                    <div className="login-form">
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

export default CssModules(Nav, navStyles)