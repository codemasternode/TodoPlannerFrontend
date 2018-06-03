import React from 'react'
import ReactDOM from 'react-dom'
import DateFormat from '../../helpers/DateFormat'
import $ from 'jquery'

class Day extends React.Component {

    constructor() {
        super()
        this.arrowClick = this.arrowClick.bind(this)
    }

    arrowClick(e) {
        const icon = ReactDOM.findDOMNode(this.refs.ico)
        $(icon).css('color','red')
    }

    render() {
        const { that, data } = this.props
        const day = new DateFormat(that.day, that.month, that.year)
        console.log(data)
        return (<div className="day" onClick={this.arrowClick}>
            <div className="todo">
                <h3>{that.day + ' ' + day.renderMonth()}</h3>
                <i ref="ico" className="far fa-arrow-alt-circle-down"></i>
            </div>
            <div className="day-todo"></div>
        </div>)
    }
}

export default Day

