import React from 'react'
import footerStyles from '../css/footer.css'
import CssModules from 'react-css-modules'

class Footer extends React.Component {
    render() {
        return (
            <div>
                Footer
            </div>
        )
    }
}

export default CssModules(Footer, footerStyles)