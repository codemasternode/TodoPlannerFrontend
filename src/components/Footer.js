import React from 'react'
import footerStyles from '../css/footer.css'
import CssModules from 'react-css-modules'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer primary">
                <div className="container">
                    <div className="col">
                        <p>marcinwarzybok@outlook.com <br />
                            Made by Marcin Warzybok<br />
                            20 listopada 2000<br />
                            tel.673 334 353<br />
                        </p>
                    </div>
                    <div className="col">

                        <object type="image/svg+xml" data={require('../assets/icons/if_facebook_2308066.svg')}>
                            <img src={require('../assets/icons/if_facebook_2308066.png')} />
                        </object>
                        <object type="image/svg+xml" data={require('../assets/icons/if_github_2308116.svg')}>
                            <img src={require('../assets/icons/if_github_2308116.png')} />
                        </object>
                        <object type="image/svg+xml" data={require('../assets/icons/if_google-plus_2308064.svg')}>
                            <img src={require('../assets/icons/if_google-plus_2308064.png')} />
                        </object>
                        <object type="image/svg+xml" data={require('../assets/icons/if_email_2308112.svg')}>
                            <img src={require('../assets/icons/if_email_2308112.png')} />
                        </object>

                    </div>
                </div>
            </div >
        )
    }
}

export default CssModules(Footer, footerStyles)