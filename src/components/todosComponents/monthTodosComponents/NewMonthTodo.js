import React from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'


class NewMonthTodo extends React.Component {

    constructor() {
        super()
        this.add = this.add.bind(this)
    }

    add(e) {
        this.props.add(e.target.value)
    }

    render() {
        return (
            <div className="cell" >
                <textarea ref="area" onBlur={this.add} />
            </div>
        )
    }
}


export default NewMonthTodo

