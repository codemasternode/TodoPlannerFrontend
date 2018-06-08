import React from 'react'
import { connect } from 'react-redux'
import { addDayTodo } from '../../../actions/dayTodos'


class NewDayTodo extends React.Component {


    constructor() {
        super()
        this.state = {
            title: '',
            startsAt: '',
            endAt: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const day = this.props.day
        const payload = this.state
        this.props.addDayTodo({ ...day, ...payload })

    }

    handelChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="form-days">
                <input type="text" name="title" placeholder="Co byś chciał dodać?" onChange={this.handelChange.bind(this)} />
                <div className="form-group">
                    <div>
                        <label>Od</label>
                        <input type="time" name="startsAt" onChange={this.handelChange.bind(this)} />
                    </div>
                    <div>
                        <label>Do</label>
                        <input type="time" name="endAt" onChange={this.handelChange.bind(this)} />
                    </div>
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

export default connect(mapStateToProps, { addDayTodo })(NewDayTodo)
