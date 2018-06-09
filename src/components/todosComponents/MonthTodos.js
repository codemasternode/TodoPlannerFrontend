import React from 'react';
import DateFormat from '../helpers/DateFormat'
import Week from '../helpers/Week'
import Column from './monthTodosComponents/Column'
import { fetchMonthTodos } from '../../actions/monthTodos'
import { connect } from 'react-redux'

class MonthTodos extends React.Component {
    constructor() {
        super()
        const now = new DateFormat(undefined, new Date().getMonth(), new Date().getFullYear())
        this.state = {
            now: now
        }
    }

    componentDidMount() {
        const { now } = this.state
        this.props.fetchMonthTodos()
        const weeks = now.countWeeks()
        this.setState({
            weeks
        })
    }

    renderWeeks() {
        const { weeks } = this.state
        if (weeks) {
            return weeks.map((value, index) => {
                return <Column data={value} index={index} />
            })
        }
        return <div>Wystąpił nie oczekiwany błąd proszę odświeżyć strone lub skontaktowąc się z deweloperem
        </div>
    }


    render() {
        return (
            <div className="month-wrapper">

            </div>
        )
    }
}

function mapStateToProps({ monthTodos }) {
    return {
        monthTodos
    }
}

export default connect(mapStateToProps, { fetchMonthTodos })(MonthTodos)