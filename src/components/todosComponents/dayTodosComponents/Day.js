import React from 'react'
import ReactDOM from 'react-dom'
import DateFormat from '../../helpers/DateFormat'
import $ from 'jquery'
import { connect } from 'react-redux'

class Day extends React.Component {

    constructor(props) {
        super(props)
        this.renderData = this.renderData.bind(this)
    }

    removeItem(item) {
        console.log(this.props.dayTodos)
    }

    renderData() {
        const todos = this.props.data
        if (todos.length !== 0) {
            const todoItems = todos.map((item, index) => {
                return <li key={index}>
                    <div>{item.title}</div>
                    <div>{item.startsAt} - {item.endAt}</div>
                    <button onClick={this.removeItem.bind(this, item)} className="minus">
                        <i className="fas fa-minus-circle"></i>
                    </button>
                </li>
            })
            return <ul>{todoItems}</ul>
        } else {
            <div>Dodaj coś</div>
        }

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

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps)(Day)

