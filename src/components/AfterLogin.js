import React from 'react'
import { connect } from 'react-redux'
import fetchCredentials from '../actions/credentials'
import logout from '../actions/logout'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

class AfterLogin extends React.Component {


    logoutUser() {
        this.props.logout(() => {
            this.props.history.push('/')
        })
    }

    componentWillMount() {
        console.log('Wykonanie')
        this.props.fetchCredentials();
    }


    render() {
        console.log(this.props)
        return (
            <div className="after-login">
                <div className="toDashboard">
                    <Link to='/Dashboard'>{this.props.user.email}</Link>
                </div>
                <button onClick={this.logoutUser.bind(this)}>Wyloguj</button>
            </div>
        )
    }
}

function mapStateToProps({ user }) {
    return {
        user
    }
}

export default withRouter(connect(mapStateToProps, { fetchCredentials, logout })(AfterLogin))

