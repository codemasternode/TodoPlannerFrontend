import React from 'react';
import { connect } from 'react-redux'
import { fetchDayTodos } from '../../actions/dayTodos'
import Week from './dayTodosComponents/Week'
import DateFormat from '../helpers/DateFormat'

class DayTodos extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchDayTodos()
    }
    render() {
        return <div>Day Plannerasdasd</div>
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, { fetchDayTodos })(DayTodos)