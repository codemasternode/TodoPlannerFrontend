import React from 'react';
import Row from './longTodosComponents/Row'
import { fetchLongTodos } from '../../actions/longTodos'
import { connect } from 'react-redux'


class LongTodos extends React.Component {

    componentDidMount() {
        this.props.fetchLongTodos()
        
    }

    render() {
        return <div>Long Planner</div>
    }
}

function mapStateToProps({ longTodos }) {
    return {
        longTodos
    }
}

export default connect(mapStateToProps, { fetchLongTodos })(LongTodos)