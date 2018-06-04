import React from 'react'
import ReactDOM from 'react-dom'
import DateFormat from '../../helpers/DateFormat'
import $ from 'jquery'
import { connect } from 'react-redux'
import { deleteDayTodo, fetchDayTodos } from '../../../actions/dayTodos'
import DayTodoModel from '../../model/DayTodoModel'
import _ from 'lodash'

class Day extends React.Component {

    constructor(props) {
        super(props)
        this.renderData = this.renderData.bind(this)
        this.arrowClick = this.arrowClick.bind(this)
    }

    removeItem(item) {
        console.log(item)
        this.props.deleteDayTodo(item)
        this.props.fetchDayTodos(this.props.now, this.props.add, (arrayToFilter) => {
            arrayToFilter.forEach(element => {
                let { _id, title, startsAt, endAt, dayOfMonth, month, year } = element
                let dayTodoModel = new DayTodoModel(_id, title, startsAt, endAt, new DateFormat(dayOfMonth, month, year))
                console.log(dayTodoModel)
                let index = _.findIndex(arrayToFilter, element)
                arrayToFilter.splice(index, 1, dayTodoModel)

            });

            return arrayToFilter
        })
    }

    renderData() {
        const todos = this.props.data
        if (todos.length !== 0) {
            const todoItems = todos.map((item, index) => {
                return <li key={index}>
                    <div>{item.title}</div>
                    <div>{item.startsAt} - {item.endAt}</div>
                    <button onClick={this.removeItem.bind(this, item._id)} className="minus">
                        <i className="fas fa-minus-circle"></i>
                    </button>
                </li>
            })
            return <ul className={`todo-list list-${this.props.that.day}`} >{todoItems}</ul>
        }

    }

    arrowClick() {
        const list = $(`.list-${this.props.that.day}`)
        $(list).slideToggle(400)
    }

    render() {
        const { that, data } = this.props
        const day = new DateFormat(that.day, that.month, that.year)
        return (<div className="day" onClick={this.arrowClick}>
            <div className="todo">
                <h3>{that.day + ' ' + day.renderMonth()}</h3>
                <div className="info">
                    <p>{data.length}</p>
                    <i ref="ico" className="far fa-arrow-alt-circle-down"></i>
                </div>
            </div>
            <div>
                {this.renderData()}
            </div>
            <div className="day-todo"></div>
        </div>)
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, { deleteDayTodo, fetchDayTodos })(Day)

