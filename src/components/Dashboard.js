import React from 'react'
import dashboardStyles from '../css/dashboard.css'
import CssModules from 'react-css-modules'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Dashboard extends React.Component {

    


    render() {
        if (!this.props.loginResult.authenticated) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { loginResult: state.loginResult }
}

export default connect(mapStateToProps, undefined)(CssModules(Dashboard, dashboardStyles))