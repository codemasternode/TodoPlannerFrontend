import React from 'react'
import homeStyles from '../css/home.css'
import CssModules from 'react-css-modules'

class Home extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default CssModules(Home, homeStyles)