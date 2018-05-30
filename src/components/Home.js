import React from 'react'
import homeStyles from '../css/home.css'
import CssModules from 'react-css-modules'
import { withRouter, Link } from 'react-router-dom'

class Home extends React.Component {

    sendToRegister() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <div className="hero-image">
                    <img src={require('../assets/static images/logo.png')} />
                    <button onClick={this.sendToRegister.bind(this)}>Dołącz do nas</button>
                </div>
                <div className="container">
                    <div className="image-wrapper">
                        <img src={require('../assets/static images/planowanie-spadku-05.jpg')} />
                    </div>
                    <div className="col">
                        <div>
                            <h2>Czy wiesz że większość miliarderów planuje swój dzień?</h2>
                            <p>Ty też możesz dołączyć do ich niewielkiego grona i zaplanować swój dzień, naukowcy udowodnili że 80% osób które planują swój dzień dokładnie nie ma problemu z prokrastynacją</p>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="col">
                        <div>
                            <h2>Świadomość</h2>
                            <p>Świadomość jest jedną z najważniejszych cech ludzi sukcesu, to ona pozwala określić kiedy marnujemy czas robiąc coś bezwartościowego od czegoś produktywnego</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={require('../assets/static images/nCTBIGahPNQeU3H.jpeg')} />
                    </div>
                </div>
                <div className="container">
                    <h2 style={{ width: 100 + '%', textAlign: 'center', marginBottom: 0, marginTop: 50 + 'px' }}>Dlaczego warto wybrać nasz produkt?</h2>
                    <div className="col">
                        <img className="brand" src={require('../assets/static images/bbff1f8c-efa5-4de6-9cdd-5a7f374f34a3.png')} />
                    </div>
                    <div className="col">
                        <img className="brand" src={require('../assets/static images/bc61ffb8-9991-49db-9ece-819e685d340f.png')} />
                    </div>
                    <div className="col">
                        <img className="brand" src={require('../assets/static images/bebfc3e4-98f9-4205-8fdd-a5ee2625bdc0.png')} />
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(CssModules(Home, homeStyles))