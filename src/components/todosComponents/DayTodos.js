import React from 'react';
import { connect } from 'react-redux'

class DayTodos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nowTime: new Date()
        }
    }
    componentDidMount() {
        console.log(this.state.nowTime)
    }
    render() {
        return <div>Day Plannerasdasd</div>
    }
}

function mapStateToProps({ dayTodos }) {
    return { dayTodos }
}

export default connect(mapStateToProps, {})(DayTodos)