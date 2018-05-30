import React from 'react';
import { connect } from 'react-redux'
import { fetchDayTodos } from '../../actions/dayTodos'
import Week from './dayTodosComponents/Week'

class DayTodos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nowTime: new Date()
        }
    }
    componentDidMount() {
        this.props.fetchDayTodos()
        console.log(this.props)
    }
    render() {
        return <div>Day Plannerasdasd</div>
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, { fetchDayTodos })(DayTodos)