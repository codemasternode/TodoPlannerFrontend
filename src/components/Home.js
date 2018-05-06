import React from 'react'
import homeStyles from '../css/home.css'
import CssModules from 'react-css-modules'

class Home extends React.Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

export default CssModules(Home, homeStyles)