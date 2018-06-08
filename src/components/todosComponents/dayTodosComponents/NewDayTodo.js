import React from 'react'
import { connect } from 'react-redux'
import { addDayTodo, fetchDayTodos } from '../../../actions/dayTodos'
import _ from 'lodash'
import DayTodoModel from '../../model/DayTodoModel'
import DateFormat from '../../helpers/DateFormat'


class NewDayTodo extends React.Component {


    constructor() {
        super()
        this.state = {
            title: '',
            startsAt: '',
            endAt: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const day = this.props.day
        const payload = this.state
        const addTime = new DateFormat().increamentDays(6, day)
        this.props.addDayTodo({ ...day, ...payload })
        this.props.fetchDayTodos(day.day, addTime, (arrayToFilter) => {
            arrayToFilter.forEach(element => {
                let { _id, title, startsAt, endAt, dayOfMonth, month, year } = element
                let dayTodoModel = new DayTodoModel(_id, title, startsAt, endAt, new DateFormat(dayOfMonth, month, year))
                let index = _.findIndex(arrayToFilter, element)
                arrayToFilter.splice(index, 1, dayTodoModel)

            });

            return arrayToFilter
        })
    }

    handelChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        return (
            <form onSubmit={this.onSubmit.bind(this)} className="form-days">
                <input type="text" name="title" placeholder="Co byś chciał dodać?" onChange={this.handelChange.bind(this)} />
                <div className="form-group">
                    <div>
                        <label>Od</label>
                        <input type="time" name="startsAt" onChange={this.handelChange.bind(this)} />
                    </div>
                    <div>
                        <label>Do</label>
                        <input type="time" name="endAt" onChange={this.handelChange.bind(this)} />
                    </div>
                </div>
                <button type="submit">Dodaj</button>
            </form>
        )
    }
}

function mapStateToProps({ dayTodos }) {
    return {
        dayTodos
    }
}

export default connect(mapStateToProps, { addDayTodo, fetchDayTodos })(NewDayTodo)
