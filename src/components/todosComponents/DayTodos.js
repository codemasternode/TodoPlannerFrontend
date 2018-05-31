import React from 'react';
import { connect } from 'react-redux'
import { fetchDayTodos } from '../../actions/dayTodos'
import Week from './dayTodosComponents/Week'
import DateFormat from '../helpers/DateFormat'

class DayTodos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nowTime: new DateFormat(new Date().getDate(), new Date().getMonth(), new Date().getFullYear())
        }
    }
    componentDidMount() {
        this.props.fetchDayTodos()
        const day = this.state.nowTime.day
        const month = this.state.nowTime.month
        const year = this.state.nowTime.year
        const addTime = new DateFormat()
        addTime.increamentDays(6, { day, month, year })
        console
        this.setState({
            addTime: addTime,
            nowTime: new DateFormat(new Date().getDate(), new Date().getMonth(), new Date().getFullYear())
        })
    }
    render() {
        console.log(this.state)
        return <div>Day Plannerasdasd</div>
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, { fetchDayTodos })(DayTodos)