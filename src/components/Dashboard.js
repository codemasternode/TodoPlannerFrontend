import React from 'react'
import dashboardStyles from '../css/dashboard.css'
import CssModules from 'react-css-modules'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

export default CssModules(Dashboard, dashboardStyles)