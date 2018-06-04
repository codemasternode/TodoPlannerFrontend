import React from 'react'
import ReactDOM from 'react-dom'
import DateFormat from '../../helpers/DateFormat'
import $ from 'jquery'

class Day extends React.Component {

    constructor(props) {
        super(props)
        this.arrowClick = this.arrowClick.bind(this)
        this.renderData = this.renderData.bind(this)
    }

    arrowClick(e) {
        const icon = ReactDOM.findDOMNode(this.refs.ico)

    }

    renderData() {
        const todos = this.props.data
        console.log(todos)
        const todoItems = todos.map((item, index) => {
            return <li key={index}>{item.title}</li>
        })
        return <ul>{todoItems}</ul>
    }

    render() {
        const { that, data } = this.props
        const day = new DateFormat(that.day, that.month, that.year)
        return (<div className="day" onClick={this.arrowClick}>
            <div className="todo">
                <h3>{that.day + ' ' + day.renderMonth()}</h3>
                <i ref="ico" className="far fa-arrow-alt-circle-down"></i>
            </div>
            <div className="todo-list">
                {this.renderData()}
            </div>
            <div className="day-todo"></div>
        </div>)
    }
}

export default Day

