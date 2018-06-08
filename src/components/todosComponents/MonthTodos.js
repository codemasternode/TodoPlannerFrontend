import React from 'react';
import DateFormat from '../helpers/DateFormat'
import Week from '../helpers/Week'

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
        now.countWeeks(now)
        
    }


    render() {
        return <div>KKKK</div>
    }
}

export default MonthTodos