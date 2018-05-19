import React from 'react'
import navStyles from '../css/nav.css'
import CssModules from 'react-css-modules'
import { Link } from 'react-router-dom'

import $ from 'jquery'
import reactDom from 'react-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import BeforeLogin from './BeforeLogin'
import AfterLogin from './AfterLogin'


class Nav extends React.Component {

    

    render() {
        return (
            <div className="nav primary">
                <div className="logo">
                    <h2>
                        <Link to="/">TodoPlanner</Link>
                    </h2>
                </div>
                {localStorage.getItem('tokenAuth') != null ? <AfterLogin /> : <BeforeLogin />}
            </div>
        )
    }
}


function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

export default withRouter(connect(mapStateToProps, null)(CssModules(Nav, navStyles)))