import React from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'


const NewMonthTodo = props => {
    return (
        <div className="cell" >
            <textarea onBlur={props.add} />
        </div>
    )
}


export default NewMonthTodo

