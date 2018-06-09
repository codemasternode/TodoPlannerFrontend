import React from 'react'
import { deleteMonthTodo } from '../../../actions/monthTodos'
import { connect } from 'react-redux'

class Cell extends React.Component {

    delete(id) {
        this.props.deleteMonthTodo(id)
    }

    render() {
        const { data } = this.props
        return (
            <div className="cell">
                <h4>{data.title}</h4>
                <div onMouseDown={this.delete.bind(this, data._id)} className="cross">
                    <i className="far fa-times-circle fa-2x" ></i>
                </div>
            </div>
        )
    }
}

export default connect(null, { deleteMonthTodo })(Cell)