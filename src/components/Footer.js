import React from 'react'
import footerStyles from '../css/footer.css'
import CssModules from 'react-css-modules'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer primary">
                <div className="container">
                    <div className="col">
                        marcinwarzybok@outlook.com <br/>
                        Made by Marcin Warzybok<br />
                        20 listopada 2000<br/>
                        tel.673 334 353<br />
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        )
    }
}

export default CssModules(Footer, footerStyles)