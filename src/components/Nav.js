import React from 'react'
import navStyles from '../css/nav.css'
import CssModules from 'react-css-modules'

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <div>
                    <h2>TodoPlanner</h2>
                </div>
                <div className="box">
                    <div>Logowanie</div>
                    <div>Rejestracja</div>
                </div>
            </div>
        )
    }
}

export default CssModules(Nav, navStyles)