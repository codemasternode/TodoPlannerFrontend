import React from 'react'
import { Link } from 'react-router-dom'

const TodoNavItem = props => {
    return (<div className="todo-nav-item">
        <Link to={props.path}>{props.text}</Link>
    </div>)
}


export default TodoNavItem