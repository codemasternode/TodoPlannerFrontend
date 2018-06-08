import React from 'react'
import ReactDOM from 'react-dom'
import DateFormat from '../../helpers/DateFormat'
import $ from 'jquery'
import { connect } from 'react-redux'
import { deleteDayTodo, fetchDayTodos } from '../../../actions/dayTodos'
import DayTodoModel from '../../model/DayTodoModel'
import _ from 'lodash'
import NewDayTodo from './NewDayTodo'

class Day extends React.Component {

    constructor() {
        super()
        this.renderData = this.renderData.bind(this)
    }

    renderData(color) {
        const data = this.props.data
        const bor = {
            border: `1px solid rgb(${color.first},${color.second},${color.third})`,
            borderRadius: `5px`
        }
        if (data.length != 0) {
            return data.map((value, index) => {
                return (
                    <li className="todo" key={index} style={bor}>
                        <h4>{value.title}</h4>
                        <h4>{value.startsAt} - {value.endAt}</h4>
                    </li>
                )
            })
        }
        return <h4>Musisz dodać coś</h4>
    }

    componentDidMount() {
        const day = $(this.refs.day)
        const toggle = $(this.refs.dayToggle)
        $(day).click(() => {
            $(toggle).slideToggle()
        })

    }

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
        });

        const changeColor = {
            backgroundColor: `rgb(${color.first},${color.second},${color.third})`,
        }

        return (
            <div className="day-wrapper">
                <div className="day" style={changeColor} ref="day">
                    <h3>{thisDay.day} {thisDay.renderMonth()}</h3>
                    <h3>{data.length}</h3>
                </div>
                <div className="toggle" ref="dayToggle">
                    <NewDayTodo day={thisDay}/>
                    <ul>
                        {this.renderData(color)}
                    </ul>
                </div>
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

