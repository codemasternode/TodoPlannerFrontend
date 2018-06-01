import React from 'react';
import { connect } from 'react-redux'
import { fetchDayTodos } from '../../actions/dayTodos'
import Week from './dayTodosComponents/Week'
import DateFormat from '../helpers/DateFormat'
import DayTodoModel from '../model/DayTodoModel'
import _ from 'lodash'


class DayTodos extends React.Component {
    constructor(props) {
        super(props)
        const nowTime = new DateFormat(new Date().getDate(), new Date().getMonth(), new Date().getFullYear())
        this.state = {
            nowTime: nowTime,
            addTime: new DateFormat().increamentDays(6, nowTime)
        }
    }
    componentDidMount() {
        const addTime = new DateFormat()
        const nowTime = this.state.nowTime
        const dayTodos = this.props.dayTodos.data

        this.props.fetchDayTodos(nowTime, addTime, (arrayToFilter) => {
            arrayToFilter.forEach(element => {
                let { title, startsAt, endAt, dayOfMonth, month, year } = element
                let dayTodoModel = new DayTodoModel(title, startsAt, endAt, new DateFormat(dayOfMonth, month, year))
                let index = _.findIndex(arrayToFilter, element)
                arrayToFilter.splice(index, 1, dayTodoModel)

            });
            const filteredArray = _.filter(arrayToFilter, ({ date: { day, month, year } }) => {
                return day >= nowTime.day && day <= addTime.day && month >= nowTime.month && month <= addTime.month && year >= nowTime.year && year <= addTime.year
            })
            return filteredArray
        })
    }

    renderTodos(data) {
        console.log(this.state)
        return <Week data={data} now={this.state.nowTime} add={this.state.addTime} />
    }

    render() {
        const data = this.props.dayTodos.data
        return <div>
            {this.renderTodos(data)}
        </div>
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, { fetchDayTodos })(DayTodos)