import React from 'react'
import { connect } from 'react-redux'
import { addDayTodo } from '../../../actions/dayTodos'
import { reduxForm } from 'redux-form'

class NewDayTodo extends React.Component {


    onSubmit(values) {
        const thisDay = this.props.day
        this.props.addDayTodo(values)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                <input type="text" name="title" />
                <div>
                    <input type="time" name="startAt" />
                    <input type="time" name="endAt" />
                </div>
                <button type="submit">Dodaj</button>
            </form>
        )
    }
}

function mapStateToProps({ dayTodos }) {
    return {
        dayTodos
    }
}

function validate(values) {
    const errors = {}
    return errors
}

export default reduxForm({
    form: 'addNewTodo',
    validate: validate
})(connect(mapStateToProps, { addDayTodo })(NewDayTodo))
