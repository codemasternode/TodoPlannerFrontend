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
                let { _id, title, startsAt, endAt, dayOfMonth, month, year } = element
                let dayTodoModel = new DayTodoModel(_id, title, startsAt, endAt, new DateFormat(dayOfMonth, month, year))
                let index = _.findIndex(arrayToFilter, element)
                arrayToFilter.splice(index, 1, dayTodoModel)

            });

            return arrayToFilter
        })
    }

    renderTodos(data) {
        return <Week data={data} now={this.state.nowTime} add={this.state.addTime} />
    }

    render() {
        const data = this.props.dayTodos.data
        return <div className="days-wrapper">
            {this.renderTodos(data)}
        </div>
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, { fetchDayTodos })(DayTodos)