import React from 'react'
import navStyles from '../css/nav.css'
import CssModules from 'react-css-modules'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="nav primary">
                <div>
                    <h2>TodoPlanner</h2>
                </div>
                <div className="box">
                    <div>
                        Logowanie
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