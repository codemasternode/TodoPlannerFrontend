import React from 'react'
import ReactDOM from 'react-dom'
import DateFormat from '../../helpers/DateFormat'
import $ from 'jquery'
import { connect } from 'react-redux'
import { deleteDayTodo, fetchDayTodos } from '../../../actions/dayTodos'
import DayTodoModel from '../../model/DayTodoModel'
import _ from 'lodash'
import NewDayTodo from './addNewDayTodo'

class Day extends React.Component {
    render() {
        const { day, month, year } = this.props.that
        const thisDay = new DateFormat(day, month, year)
        const data = this.props.data
        const color = {
            first: 66,
            second: 134,
            third: 244,
            opacity: 0.7
        }
        data.forEach(element => {
            color.first = color.first - 20
            color.second = color.second - 20
            color.third = color.third + 40
            color.opacity = color.opacity + 0.04
        });

        const changeColor = {
            background: `rgba(${color.first},${color.second},${color.third},${color.opacity})`
        }

        return (
            <div className="day" style={changeColor}>
                <h3>{thisDay.day} {thisDay.renderMonth()}</h3>
                <h3>{data.length}</h3>
            </div>
        )
    }
}

function mapStateToProps({ dayTodos }) {
    return {
        dayTodos
    }
}
export default connect(mapStateToProps, { deleteDayTodo, fetchDayTodos })(Day)

